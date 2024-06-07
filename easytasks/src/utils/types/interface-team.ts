export interface Team {
  team_id: string;
  team_name: string;
  description: string;
  created_date: Date;
  finish_date: Date;
  invitation_code: string;
  team_leader: string;
  team_users: string[];
  sprints: null;
  tasks: string[];
  deletedAt: Date;
}
