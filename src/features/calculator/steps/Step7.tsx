// import React from "react";
// import type { Step3Data } from "../../../hooks/useCalculator";

// interface Props {
//     data: Step3Data;
//     onChange: (data: Partial<Step3Data>) => void;
// }

// interface FieldProps {
//     id: keyof Step3Data;
//     label: string;
//     type?: string;
//     placeholder: string;
//     value: string;
//     onChange: (val: string) => void;
// }

// const Field: React.FC<FieldProps> = ({
//     id,
//     label,
//     type = "text",
//     placeholder,
//     value,
//     onChange,
// }) => (
//     <div className="space-y-1.5">
//         <label htmlFor={id} className="block text-sm font-medium text-gray-700">
//             {label}
//         </label>
//         <input
//             id={id}
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             className={[
//                 "w-full px-4 py-2.5 rounded-lg border text-sm",
//                 "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent",
//                 "placeholder:text-gray-400 text-gray-900",
//                 value ? "border-orange-400" : "border-gray-300",
//             ].join(" ")}
//         />
//     </div>
// );

// const Step3: React.FC<Props> = ({ data, onChange }) => {
//     return (
//         <div className="space-y-6">
//             <div>
//                 <h2 className="text-xl font-semibold text-gray-900">
//                     Where should we send your estimate?
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">
//                     We'll never share your information with third parties.
//                 </p>
//             </div>

//             <div className="space-y-4">
//                 <Field
//                     id="name"
//                     label="Full name"
//                     placeholder="Jane Doe"
//                     value={data.name}
//                     onChange={(val) => onChange({ name: val })}
//                 />
//                 <Field
//                     id="email"
//                     label="Email address"
//                     type="email"
//                     placeholder="jane@example.com"
//                     value={data.email}
//                     onChange={(val) => onChange({ email: val })}
//                 />
//                 <Field
//                     id="phone"
//                     label="Phone number (optional)"
//                     type="tel"
//                     placeholder="+1 555 000 0000"
//                     value={data.phone}
//                     onChange={(val) => onChange({ phone: val })}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Step3;
