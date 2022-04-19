import React from 'react'
import DiscussionList from './DiscussionList/DiscussionList';

const Home = () => {
  const discussions = [
    {
        id: 1,
        bookId: 1,
        bookSummary: {
            title: "Dom Casmurro",
            author: "Machado de Assis",
            avaregeRating: 4.7
        },
        userName: "Armando",
        discussion: "Traiu ou não traiu?",
        comments: [
            {
                id: 1,
                userName: "Ana",
                text: "traiu"
            },
            {
                id: 2,
                userName: "Amanda",
                text: "não traiu"
            },
            {
                id: 3,
                userName: "Alex",
                text: "devia ter traido"
            },
        ]
    },
    {
        id: 2,
        bookId: 2,
        bookSummary: {
            title: "As aguas vivas não sabem de si",
            author: "Aline Valek",
            avaregeRating: 4.7
        },
        userName: "Bernado",
        discussion: "Não aguentaria ficar num submarino"
    },
    {
        id: 3,
        bookId: 3,
        bookSummary: {
            title: "Memórias póstumas de brás cubas",
            author: "Machado de Assis",
            avaregeRating: 4.7
        },
        userName: "Carla",
        discussion: "Quem é mesmo marcela?"
    },
  ]
    
  return (
    <div className='container'>
        <DiscussionList key={"list"} discussions={discussions} />
    </div>
  )
}

export default Home