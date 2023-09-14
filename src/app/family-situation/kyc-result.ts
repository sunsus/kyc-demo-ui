export interface KycResult {
  relationshipStatus: string
  relationships: Relationship[]
  dateOfBirth?: string
}

export interface Relationship {
  relation: string
  fullName: string
}
