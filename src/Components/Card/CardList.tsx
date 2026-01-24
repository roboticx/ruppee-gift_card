import Card from './Card'

const CardList = ({ cardsData }: any) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center">
      {
        cardsData.map((cardData: any) => (

          <Card cardData={cardData} />
        ))
      }
    </div>
  )
}

export default CardList