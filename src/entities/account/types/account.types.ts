export type Account = {
    tags: { text: string }[]
    type: AccountTypes,
    value: string
    password: string | null
}

export enum AccountTypes {
    LOCAL = 'local',
    LDAB = 'ldab'
}