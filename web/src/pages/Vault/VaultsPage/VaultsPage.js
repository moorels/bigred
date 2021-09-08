import VaultsCell from 'src/components/Vault/VaultsCell'
import { UserContext } from '../../../UserContext'
import { useContext } from 'react'

const VaultsPage = () => {
  const { user } = useContext(UserContext)

  return <VaultsCell userEmailId={user} />
}

export default VaultsPage
