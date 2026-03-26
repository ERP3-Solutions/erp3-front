export interface IAuditEntity<ID> {
  id?: ID;
  logUserCreated: string;
  logUserUpdated: string;
  createdOnUtc: Date;
  updateOnUtc: Date;
}