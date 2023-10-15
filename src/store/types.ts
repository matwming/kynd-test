import { Member } from "@/services/members"

export interface StoreState {
  title: string,
  isLoaded: boolean,
  members:Member[],
  error:''
}