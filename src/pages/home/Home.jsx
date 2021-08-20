
import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import axiosClient from '../../components/config/axios'

const Home = ({type}) => {

    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() => {

        const getRandomLists = async () => {

            try {

                const res = await axiosClient.get(
                    `lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                      }`,
                      {
                          headers: {
                              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWU2NGY1YzcxMzU2YTU2YWM1ZTgwYyIsImlhdCI6MTYyOTM4NjI2NCwiZXhwIjoxNjI5NjQ1NDY0fQ.OKKaucVvsSyXH4ecyZGkq2_R-EEi-PXWG8_oFjKP4YU"
                          },
                      }
                )

                setLists(res.data)

            } catch(error) {
                console.log(error)
            }

        }

        getRandomLists()

    }, [type, genre])

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>
            {lists.map((list) => (
                <List list={list} />
            ))}
        </div>
    )
}

export default Home
