import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jzibjsmqmjwytusydntg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6aWJqc21xbWp3eXR1c3lkbnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjg0MjUsImV4cCI6MjA2NDY0NDQyNX0.FAjWL4SrbvIK46HrgRaj100kDjy72bjujclxt9Whpy0"
);
