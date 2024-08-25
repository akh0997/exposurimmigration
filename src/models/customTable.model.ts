import { TableColumnType } from "../enums/customTable.enum";

export interface TableColumnModel {
  label: string;
  key: string;
  type: TableColumnType;
}
