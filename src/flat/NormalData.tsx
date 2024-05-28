import '../App.css'
import {Box} from "@mui/material";
import {Dropdown} from "./Dropdown.tsx";
import {useMultiLevelDropdown} from "./useMultiLevelDropdown.tsx";


export const NormalData = () => {
    const initialOptions = {
        first: ['外付CD,DVD,BD', 'USBメモリ', 'USBハードディスク','SDカード'],
        second: {'外付CD,DVD,BD': ['Buffalo_BRXL-PT6U3-D'], USBメモリ: ['Buffalo_RUF3-HSL', 'Buffalo_RUF3-HSTV', 'ELECOM_MF-ENU3A'], USBハードディスク: ['IO-DATA_HDPD-SUTB'], SDカードリーダー: ['Buffalo_BSCR26TU3', 'ELECOM_MR3-A006']},
        third: {'Buffalo_BRXL-PT6U3-D': ['米沢牛', '松坂牛', '飛騨牛'], 'Buffalo_RUF3-HSL': ['黒豚', 'アグー豚', '三元豚'], 鶏: ['比内地鶏', '名古屋コーチン', '軍鶏'], ジャガイモ: ['男爵', 'メークイン'], 人参: ['人参', '金時人参', '高麗人参'], 玉ねぎ: ['国産', '外国産'], リンゴ: ['フジ', '秋映'], ミカン: ['文旦', 'デコポン', '温州ミカン'], バナナ: ['台湾産', 'フィリピン産']}
    }

    const {
        firstSelection,
        secondSelection,
        thirdSelection,
        firstOptions,
        secondOptions,
        thirdOptions,
        handleFirstSelection,
        handleSecondSelection,
        handleThirdSelection
    } = useMultiLevelDropdown(initialOptions)

    return (
        <Box display="flex" justifyContent="space-between" gap={5}>
            <Dropdown labelID="first-select-label"
                      label="機器" value={firstSelection} options={firstOptions} onChange={handleFirstSelection}
            />
            <Dropdown labelID="second-select-label"
                      label="機種" value={secondSelection} options={secondOptions}
                      onChange={handleSecondSelection}

            />
            <Dropdown labelID="third-select-label"
                      label="詳細" value={thirdSelection}
                      options={thirdOptions} onChange={handleThirdSelection}
            />
        </Box>
    )
}

