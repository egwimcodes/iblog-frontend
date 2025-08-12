// "use client"

// type ToolbarButtonProps = {
//     icon: React.ReactNode;
//     active?: boolean;
//     onClick: () => void;
//     label?: string;
//     disabled?: boolean;
// };
// const ToolbarButton = ({ icon, active, onClick, label, disabled }: ToolbarButtonProps) => (
//     <button
//         type="button"
//         onClick={onClick}
//         disabled={disabled}
//         className={`p-2 rounded-lg transition-all ${active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//         title={label}
//     >
//         {icon}
//     </button>
// );

// type ToolbarDropdownProps = {
//     icon: React.ReactNode;
//     label?: string;
//     options: { label: React.ReactNode; onClick?: () => void; active?: boolean; disabled?: boolean }[];
// };
// const ToolbarDropdown = ({ icon, label, options }: ToolbarDropdownProps) => {
//     const [open, setOpen] = useState(false);
//     return (
//         <div className="relative">
//             <button
//                 type="button"
//                 className="p-2 rounded-lg hover:bg-gray-200 transition-all"
//                 onClick={() => setOpen((v: boolean) => !v)}
//                 title={label}
//             >
//                 {icon}
//             </button>
//             {open && (
//                 <div className="absolute left-0 mt-2 min-w-[140px] bg-white shadow-xl rounded-xl p-2 z-30 flex flex-col gap-1">
//                     {options.map((opt, i) => (
//                         <button
//                             key={i}
//                             onClick={() => {
//                                 opt.onClick?.();
//                                 setOpen(false);
//                             }}
//                             disabled={opt.disabled}
//                             className={`text-left px-3 py-1.5 rounded-lg transition-all ${opt.active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'} ${opt.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//                         >
//                             {opt.label}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
//   };

// function useState(arg0: boolean): [any, any] {
//     throw new Error("Function not implemented.");
// }
