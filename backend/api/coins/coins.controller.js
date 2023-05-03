const axios = require('axios');

module.exports = {
    async getCoins(request, response) {
        let coins = []

        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=${request.query.page}`) //page=${request.data.page}
            .then(function (ApiResponse) {
                ApiResponse.data.map((res, index) => {
                    coins[index] = {
                        id: res.id,
                        image: res.image,
                        name: res.name,
                        symbol: res.symbol,
                        price: res.current_price,
                        high_24h: res.high_24h,
                        low_24h: res.low_24h,
                        price_change_percentage_24h: res.price_change_percentage_24h                    
                    }
                })

                response.status(200).json(coins);
            })
            .catch(function (error) {
                console.log(error)
            });
    },

    async getCoin(request, response) {
        let coin = {}

        await axios.get(`https://api.coingecko.com/api/v3/coins/${request.query.coin_id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`)
            .then(function (ApiResponse) {            
                coin = {
                    id: ApiResponse.data.id,
                    name: ApiResponse.data.name,
                    symbol: ApiResponse.data.symbol,
                    rank: ApiResponse.data.market_cap_rank,
                    image: ApiResponse.data.image.small,
                    price: ApiResponse.data.market_data.current_price.usd,
                    description: ApiResponse.data.description.en,
                    priceChange24h: ApiResponse.data.market_data.price_change_24h,
                    priceChangePercentage24h: ApiResponse.data.market_data.price_change_percentage_24h,
                    priceChangePercentage7d: ApiResponse.data.market_data.price_change_percentage_7d,
                    priceChangePercentage14d: ApiResponse.data.market_data.price_change_percentage_14d,
                    priceChangePercentage30d: ApiResponse.data.market_data.price_change_percentage_30d,
                    priceChangePercentage60d: ApiResponse.data.market_data.price_change_percentage_60d,
                    priceChangePercentage200d: ApiResponse.data.market_data.price_change_percentage_200d,
                    priceChangePercentage1y: ApiResponse.data.market_data.price_change_percentage_1y,
                    high24h: ApiResponse.data.market_data.high_24h.usd,
                    low24h: ApiResponse.data.market_data.low_24h.usd,
                }

                response.status(200).json(coin);
            })
            .catch(function (error) {
                console.log(error)
            });
    }
}