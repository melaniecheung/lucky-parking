import type { onEvent } from "@lucky-parking/typings";
import DateInput from "@lucky-parking/ui/src/components/date-input";
import CitationDataCategorySelection from "./citation-data-category-selection";
import CitationDatePresetsSelection from "./citation-date-presets-selection";

interface CitationDataFilterProps {
  onCategorySelect: onEvent;
  onDatePresetSelect: onEvent;
}

export default function CitationDataFilter(props: CitationDataFilterProps) {
  const { onCategorySelect, onDatePresetSelect } = props;

  return (
    <>
      <CitationDataCategorySelection onSelect={onCategorySelect} />

      <div className="flex w-full items-center space-x-2">
        <CitationDatePresetsSelection onSelect={onDatePresetSelect} />

        <p className="paragraph-2 text-black-400 font-medium">or</p>

        <div className="flex flex-auto items-center space-x-1">
          <DateInput id="From">From</DateInput>
          <DateInput id="To">To</DateInput>
        </div>
      </div>
    </>
  );
}
