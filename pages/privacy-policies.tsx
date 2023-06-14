import { NextPage } from "next";
import { PrivacyPolicies } from '../components/privacy/PrivacyPolicies';

const privacyPoliciesPage: NextPage = ():JSX.Element => {
  return (
    <PrivacyPolicies />
  )
}

export default privacyPoliciesPage;