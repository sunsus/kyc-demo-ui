export interface KycResult {
  fullName?: string
  civilStatus?: CivilStatus
  partnerRelations: PartnerRelations
  dateOfBirth?: string
  remarks?: string
}

export interface CivilStatus {
  civilStatus?: string
  changeOfCivilStatus?: string
  reasoning?: string
}

export interface PartnerRelations {
  relations: Relation[]
}

export interface Relation {
  relationType: string
  firstName: string
  lastName: string
  nationality: string
  domicile: string
  dateOfBirth?: string
  dateOfDeath?: string
}
