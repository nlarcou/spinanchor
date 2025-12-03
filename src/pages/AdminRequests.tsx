import { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogOut, Eye, RefreshCw, Users, ArrowUpDown, Search } from 'lucide-react';
import { format } from 'date-fns';

interface ContactRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  phone: string | null;
  service: string | null;
  message: string;
  status: 'New' | 'Viewed' | 'Replied' | 'Closed';
  created_at: string;
  updated_at: string;
}

const statusColors: Record<string, string> = {
  New: 'bg-blue-500',
  Viewed: 'bg-yellow-500',
  Replied: 'bg-green-500',
  Closed: 'bg-gray-500',
};

const statusOrder = { New: 0, Viewed: 1, Replied: 2, Closed: 3 };

type SortField = 'date' | 'status';
type SortDirection = 'asc' | 'desc';

const AdminRequests = () => {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredAndSortedRequests = useMemo(() => {
    let filtered = requests;

    // Filter by name
    if (nameFilter.trim()) {
      const search = nameFilter.toLowerCase();
      filtered = filtered.filter(
        r => r.first_name.toLowerCase().includes(search) || r.last_name.toLowerCase().includes(search)
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(r => r.status === statusFilter);
    }

    // Sort
    return [...filtered].sort((a, b) => {
      if (sortField === 'date') {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      } else {
        const orderA = statusOrder[a.status];
        const orderB = statusOrder[b.status];
        return sortDirection === 'asc' ? orderA - orderB : orderB - orderA;
      }
    });
  }, [requests, nameFilter, statusFilter, sortField, sortDirection]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin');
    }
  }, [user, isAdmin, authLoading, navigate]);

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch requests',
        variant: 'destructive',
      });
    } else {
      setRequests(data as ContactRequest[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user && isAdmin) {
      fetchRequests();
    }
  }, [user, isAdmin]);

  const handleViewRequest = async (request: ContactRequest) => {
    setSelectedRequest(request);
    
    // Update status to 'Viewed' if it's 'New'
    if (request.status === 'New') {
      const { error } = await supabase
        .from('contact_requests')
        .update({ status: 'Viewed' })
        .eq('id', request.id);

      if (!error) {
        setRequests(prev =>
          prev.map(r => (r.id === request.id ? { ...r, status: 'Viewed' as const } : r))
        );
        setSelectedRequest({ ...request, status: 'Viewed' });
      }
    }
  };

  const handleStatusChange = async (newStatus: 'Replied' | 'Closed') => {
    if (!selectedRequest) return;

    const { error } = await supabase
      .from('contact_requests')
      .update({ status: newStatus })
      .eq('id', selectedRequest.id);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to update status',
        variant: 'destructive',
      });
    } else {
      setRequests(prev =>
        prev.map(r => (r.id === selectedRequest.id ? { ...r, status: newStatus } : r))
      );
      setSelectedRequest({ ...selectedRequest, status: newStatus });
      toast({
        title: 'Status Updated',
        description: `Request marked as ${newStatus}`,
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">NSGS Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link to="/admin/users">
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Users
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Requests Table */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-elegant">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact Requests</CardTitle>
                <Button variant="outline" size="sm" onClick={fetchRequests}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Filter by name..."
                      value={nameFilter}
                      onChange={(e) => setNameFilter(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Viewed">Viewed</SelectItem>
                      <SelectItem value="Replied">Replied</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 font-medium hover:bg-transparent"
                          onClick={() => toggleSort('status')}
                        >
                          Status
                          <ArrowUpDown className={`ml-1 h-3 w-3 ${sortField === 'status' ? 'text-primary' : 'text-muted-foreground'}`} />
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 font-medium hover:bg-transparent"
                          onClick={() => toggleSort('date')}
                        >
                          Date
                          <ArrowUpDown className={`ml-1 h-3 w-3 ${sortField === 'date' ? 'text-primary' : 'text-muted-foreground'}`} />
                        </Button>
                      </TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedRequests.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                          No requests found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredAndSortedRequests.map((request) => (
                        <TableRow
                          key={request.id}
                          className={selectedRequest?.id === request.id ? 'bg-muted' : ''}
                        >
                          <TableCell className="font-medium">
                            {request.first_name} {request.last_name}
                          </TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell>
                            <Badge className={statusColors[request.status]}>
                              {request.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {format(new Date(request.created_at), 'MMM d, yyyy')}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewRequest(request)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Request Details */}
          <div>
            <Card className="border-border shadow-elegant sticky top-8">
              <CardHeader>
                <CardTitle>Request Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedRequest ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">
                        {selectedRequest.first_name} {selectedRequest.last_name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{selectedRequest.email}</p>
                    </div>
                    {selectedRequest.company && (
                      <div>
                        <p className="text-sm text-muted-foreground">Company</p>
                        <p className="font-medium">{selectedRequest.company}</p>
                      </div>
                    )}
                    {selectedRequest.phone && (
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{selectedRequest.phone}</p>
                      </div>
                    )}
                    {selectedRequest.service && (
                      <div>
                        <p className="text-sm text-muted-foreground">Service Interest</p>
                        <p className="font-medium">{selectedRequest.service}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Message</p>
                      <p className="font-medium whitespace-pre-wrap">{selectedRequest.message}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge className={statusColors[selectedRequest.status]}>
                        {selectedRequest.status}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Submitted</p>
                      <p className="font-medium">
                        {format(new Date(selectedRequest.created_at), 'PPpp')}
                      </p>
                    </div>
                    
                    {/* Status Actions */}
                    <div className="pt-4 border-t border-border space-y-2">
                      <p className="text-sm text-muted-foreground mb-2">Update Status</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={selectedRequest.status === 'Replied' ? 'default' : 'outline'}
                          onClick={() => handleStatusChange('Replied')}
                          disabled={selectedRequest.status === 'Replied'}
                        >
                          Mark Replied
                        </Button>
                        <Button
                          size="sm"
                          variant={selectedRequest.status === 'Closed' ? 'default' : 'outline'}
                          onClick={() => handleStatusChange('Closed')}
                          disabled={selectedRequest.status === 'Closed'}
                        >
                          Mark Closed
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Select a request to view details
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRequests;
