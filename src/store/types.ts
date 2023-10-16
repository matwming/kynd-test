import { Member } from "@/services/members";

export interface StoreState {
  title: string;
  isLoading: boolean;
  members: Member[];
  error: "";
  isLoaded: boolean;
}
