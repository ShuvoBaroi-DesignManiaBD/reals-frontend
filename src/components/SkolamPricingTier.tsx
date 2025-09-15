interface SkolamPricingTierProps {
  participants: string;
  price: string;
  priceNote: string;
  additionalNote?: string;
}

export const SkolamPricingTier: React.FC<SkolamPricingTierProps> = ({
  participants,
  price,
  priceNote,
  additionalNote
}) => {
  const isLargeGroup = participants === '100+';

  return (
    <div className={`bg-[#fffffff2] rounded-[20px] shadow-[1px_4px_28px_9px_#25a0dd33] p-6 border-t-1 border-secondary ${
      isLargeGroup ? '' : 'flex items-center justify-start gap-40'
    }`}>
      {isLargeGroup ? (
        <>
          <div className="w-full flex justify-start gap-30">
            <div className="flex flex-col items-start justify-between">
              <p className="text-[44px] leading-[49px] tracking-[0.88px] text-[#109AFC] font-['Poppins']">
                {participants}
              </p>
              <p className="text-[14px] leading-[15px] text-black font-light uppercase font-['Poppins']">
                dalībnieki
              </p>
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="text-[35px] leading-[39px] tracking-[0.7px] text-[#109AFC] font-['Poppins']">
                {price}
              </p>
              <p className="text-[14px] leading-[15px] text-black font-light font-['Poppins']">
                {priceNote}
              </p>
            </div>
          </div>
          {additionalNote && (
            <p className="text-[11px] leading-[15px] text-[#949292] font-light font-['Poppins'] mt-[8px] w-[393px]">
              {additionalNote}
            </p>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <p className="text-[44px] leading-[49px] tracking-[0.88px] text-[#109AFC] font-['Poppins']">
              {participants}
            </p>
            <p className="text-[14px] leading-[15px] text-black font-light uppercase font-['Poppins'] mt-[1px]">
              dalībnieki
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[35px] leading-[39px] tracking-[0.7px] text-[#109AFC] font-['Poppins']">
              {price}
            </p>
            <p className="text-[14px] leading-[15px] text-black font-light font-['Poppins'] mt-[9px]">
              {priceNote}
            </p>
          </div>
        </>
      )}
    </div>
  );
};