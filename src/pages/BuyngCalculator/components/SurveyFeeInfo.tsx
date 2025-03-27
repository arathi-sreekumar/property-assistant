import { Link } from "react-router";
import { Help } from "../../../components/Help";

export const SurveyFeeInfo: React.FC = () => {
  return (
    <Help title="Survey Fees">
      <p>
        The cost of the survey depends on what type of survey you choose. See this guide on <Link to="https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/how-much-does-a-house-survey-cost/">how much a survey costs</Link> for more details.
      </p>
      <p><strong>RICS Level 1 Home Survey (Typical costs: £300-£900)</strong></p>
      <ul>
        <li>A RICS Home Survey Level 1 covers visible defects and a condition rating, highlighting issues in need of urgent investigation.</li>
        <li>This is the most basic type of survey and is suitable for standard properties.</li>
      </ul>
      <p><strong>RICS Home Survey Level 2 (Typical costs: £400-£1000)</strong></p>
      <ul>
        <li>This covers the condition of property with relative importance of any problems, advice on issues and repairs needed.</li>
        <li>This is the most common survey and suitable for standard properties in reasonable condition.</li>
      </ul>
      <p><strong>RICS Home Survey Level 3 (Typical costs: £630 – £1500)</strong></p>
      <ul>
        <li>This full structural survey gives in depth view of property condition and can also include estimate of costs for repairing defects.</li>
        <li>This is suitable for older (50 years +), larger, unusual properties, as well as those in poor condition.</li>
      </ul>
    </Help>
  );
}
