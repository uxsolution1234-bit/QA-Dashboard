create table if not exists public.qa_issue_projects (
  project text primary key,
  rows jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.qa_issue_projects enable row level security;

drop policy if exists "Public read qa_issue_projects" on public.qa_issue_projects;
create policy "Public read qa_issue_projects"
on public.qa_issue_projects
for select
to anon
using (true);

drop policy if exists "Public write qa_issue_projects" on public.qa_issue_projects;
create policy "Public write qa_issue_projects"
on public.qa_issue_projects
for insert
to anon
with check (true);

drop policy if exists "Public update qa_issue_projects" on public.qa_issue_projects;
create policy "Public update qa_issue_projects"
on public.qa_issue_projects
for update
to anon
using (true)
with check (true);
