-- Add DELETE policy for contact_requests table (admin-only)
CREATE POLICY "Only admins can delete contact requests"
ON public.contact_requests
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));