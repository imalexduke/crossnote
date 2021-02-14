import { Note } from "./note";
import { Notebook } from "./notebook";

export type TabNodeComponent =
  | "Settings"
  | "Note"
  | "Notes"
  | "Today"
  | "Todo"
  | "Conflicted"
  | "Privacy"
  | "Graph";

export interface TabNodeConfig {
  singleton: boolean;
  note?: Note;
  notebook?: Notebook;
}

export interface CrossnoteTabNode {
  type: "tab";
  name: string;
  component: TabNodeComponent;
  config: TabNodeConfig;
  id?: string;
}

export const TabHeight = 24;
