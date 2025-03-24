import { Help } from "../../../components/Help";

export const ConveyancingInfo: React.FC = () => {
  return (
    <Help title="Conveyancing Fees">
      <p>
        Conveyancing solicitor fees can be split into two parts:
      </p>
      <ul>
        <li>
          The legal fees (what the conveyancer or solicitor charges for doing the work). Average legal fees when buying a house range from around £500-£1150, according to Reallymoving.
        </li>
        <li>
          The disbursements. These include various local searches so your conveyancing solicitor can flag up any local issues you need to be aware of, which typically cost from £250-£450, and registering change of ownership with the Land Registry, which costs £200-£300. These disbursements could add on up to £700 or even more.
        </li>
      </ul>
      <p>
        How much conveyancing fees cost depends on the value of the home you are buying, whether it is leasehold or freehold (conveyancing fees for a leasehold property could cost around £300 more) and the searches you have done.
      </p>
    </Help>
  );
}
