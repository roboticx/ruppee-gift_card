import Card from './Card'
import CustomCard from './CustomCard'

const CardList = ({ cardsData }: any) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center">
      <CustomCard cardData={cardsData[0]} />
      <CustomCard cardData={cardsData[0]} />
      {/* {
        cardsData.map((cardData: any) => (
          <Card cardData={cardData} />
        ))
      } */}
    </div>
  )
}

export default CardList