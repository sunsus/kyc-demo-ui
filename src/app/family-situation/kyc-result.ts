export interface KycResult {
  relationshipStatus: string
  relationships: Array<Relationship>
}

export interface Relationship {
  relation: string
  fullName: string
}
