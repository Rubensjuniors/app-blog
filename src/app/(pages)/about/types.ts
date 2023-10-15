export interface AboutProps {
  props: {
    name: string
  }
}

export interface ShowMoreListProps {
  list: string[]
  showIndice: number
  textbutton: {
    more: string
    less: string
  }
}
