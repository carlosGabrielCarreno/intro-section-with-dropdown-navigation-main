import Select from "react-select";

const options = [
  { value: "history", label: "History" },
  { value: "ourTeam", label: "Our Team" },
  { value: "blog", label: "blog" },
];

export const CompanySelected = () => (
  <Select
    className=""
    options={options}
    placeholder="Company"
    formatOptionLabel={({ label }) => (
      <div className="item-company">
        <div className="label">{label}</div>
      </div>
    )}
  />
);
