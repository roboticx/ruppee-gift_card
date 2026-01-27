import Card from "./Card"
import CustomCard from "./CustomCard"

const CardList = ({ cardsData }: any) => {

  const store = {
    storeName: 'BlinkIt',
    storeImg: "/images/cards/bklt.jpg",
  }

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center">
      <CustomCard store={store} />
      {
        cardsData.map((cardData: any) => (
          <Card cardData={cardData} />
        ))
      }
    </div>
  )
}

export default CardList