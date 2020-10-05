import React from 'react'
import './Collabs.scss'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import Typography from '@material-ui/core/Typography'
import CollabsCard from './CollabsCard/CollabsCard'

function Collabs() {
  const collection = useFirestore().collection('Partners').orderBy('id', 'asc')
  const collabs = useFirestoreCollectionData(collection, { idField: 'id' }) // TODO: Change Const Name

  return (
    <div className="CollabsPage">
      <Typography variant="h2" gutterBottom className="header">
        Collaborations
      </Typography>
      <div className="CollabsCards">
        {collabs
          .filter(({ name }) => !name.includes('DSC'))
          .map((collab, i) => (
            <CollabsCard
              style={{ animationDelay: `${200 * i}ms` }}
              collab={collab}
              key={collab.id}
            />
          ))}
      </div>
    </div>
  )
}

export default Collabs
