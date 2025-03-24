import { Link } from "react-router";

import { Help } from "../../../components/Help";


export const StampDutyInfo: React.FC = () => {
  return (
    <Help title="Stamp Duty">
      <p>
        Stamp Duty Land Tax (SDLT) is a tax you pay when you buy a property in the UK.
      </p>
      <p>
        The rate of SDLT you pay depends on the purchase price of the property and
        whether you are a first-time buyer, a single home buyer (moving home) or if you are a buying your second home or buy to let.
      </p>
      <p>
        You can read more about SDLT at <Link to="https://www.gov.uk/stamp-duty-land-tax">Stamp Duty Land Tax</Link>
      </p>
    </Help>
  );
}
