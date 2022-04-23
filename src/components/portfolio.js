import { IoBriefcaseOutline } from 'react-icons/io5'
import { gql, useQuery } from '@apollo/client'

import ProjectImg from '../images/project.png'

import './home/home.css'


const REPO = gql`
query { 
  user(login: "${process.env.REACT_APP_GITHUB_LOGIN}") {
    id
    pinnedItems(first: 4){
      edges {
        node {
          ... on Repository{
            id
            name
            homepageUrl
            url
            description
            repositoryTopics (first: 5) {
              edges {
                node {
                  topic {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      } 
    }
  }
}
`

const Portfolio = () => {
  const { loading, error, data} = useQuery(REPO)

  if (loading) { return <p>Please wait...</p> }
  if (error) { return <p>Error</p> }

  return (
    <ul className='portfolio'>
      {data.user.pinnedItems.edges.map(( { node }) => {

        return(
          <li key={node.id}>
            <article className='project-card'>
              <img src={ProjectImg} className='project-img' />
              <div className='project-details'>
                <div className='grow'>
                  <h5 className='project-name'>{node.name}</h5>
                  <p className='project-description'>{node.description}</p>

                  <p className='project-tags'>{node.repositoryTopics.edges.map(({ node }) => <li key={node.topic.id}>{`#${node.topic.name}`}</li>)}</p>
                </div>
                <div className="project-links">
                  <span><a href={node.url} target="_blank" rel="noreferrer noopener">View GitHub</a></span>
                  {node.homepageUrl && <span><a href={node.homepageUrl} target="_blank" rel="noreferrer noopener">View Project</a></span>}
                </div>
              </div>
              <IoBriefcaseOutline className="portfolio-icon"/>          
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default Portfolio