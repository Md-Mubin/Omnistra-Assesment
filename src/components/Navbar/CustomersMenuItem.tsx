import { Nav_customer } from "@/api/fakeApi";

const CustomersMenuItem = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {Nav_customer?.content?.map((item) => (
                <div className="relative p-6 rounded-2xl bg-linear-to-b from-[#141416] to-[#0b0b0d] h-78.5 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group cursor-pointer overflow-hidden">
                    <div className="flex items-center w-full mb-2">
                        <span className="font-bold text-base tracking-tight" style={{ color: item.accent }}>{item.logo}</span>
                        {item.metric && (
                            <span className=" text-xs font-semibold text-white bg-black/40 px-2 py-0.5 rounded-full ml-2 flex items-center min-w-10 justify-center">
                                {item.metric.value}{item.metric.suffix ? item.metric.suffix : ''}
                            </span>
                        )}
                    </div>
                    <div className="text-xs text-white/80 mb-2 whitespace-pre-line leading-snug min-h-8">{item.description}</div>
                    <div className="mt-auto">
                        <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
                            {item.category}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default CustomersMenuItem;
