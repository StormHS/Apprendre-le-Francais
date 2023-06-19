// this is telling the database what the structure of our entries are
export interface Entry {
  id: number
  frenchEntry: string
  englishEntry: string
}

export interface EntryData {
  frenchEntry: string
  englishEntry: string
}
