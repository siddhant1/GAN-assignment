import Image from 'next/image'
import React from 'react'



const styles = {
    headerContainer: {
        display: "flex",
        margin: '0 auto',
        justifyContent: "center",
        background: "#bed4ff",
        height: "30vh",
        alignItems: "center"
    },
    itemContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4AFAB",
        padding: '20px 50px'

    },
    headingContainer: {
        fontSize: 40,

    },
    imgContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '20px'

    },
    image: {
        marginRight: '20px'
    },
    bannerContainer: {
        marginTop: "200px",
        display: "flex",
        height: '200px',
        justifyContent: "center",
        width: '900px',
        "boxShadow": "4px 13px 22px -16px rgba(235,40,235,1);"
    }
}

export const Header = () => {

    const bannerItems = [
        {
            heading: "Products",
            imgURl: "/images/cupcake.svg",
            description: "Get your favourite products",
        },
        {
            heading: "Cakes",
            imgURl: "/images/cupcake.svg",
            description: "Get your favourite cakes baked",
        },
        {
            heading: "Recepies",
            imgURl: "/images/cupcake.svg",
            description: "Get your favourite recepies",
        }
    ]

    return <div style={styles.headerContainer}>

        <div style={styles.bannerContainer}>
            {bannerItems.map((item) => {
                return <div style={styles.itemContainer}>
                    <div style={styles.headingContainer}>
                        {item.heading}
                    </div>

                    <div style={styles.imgContainer}>
                        <Image style={styles.image} width={50} height={50} src={item.imgURl} alt={item.description} />
                        {item.description}
                    </div>
                </div>
            })}
        </div>
    </div>
}