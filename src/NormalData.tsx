import './App.css'
import {Box} from "@mui/material";
import {Dropdown} from "./Dropdown.tsx";
import {useMultiLevelDropdown} from "./useMultiLevelDropdown.tsx";


export const NormalData = () => {
    const initialOptions = {
        first: ['肉', '野菜', '果物'],
        second: {肉: ['牛', '豚', '鶏'], 野菜: ['ジャガイモ', '人参', '玉ねぎ'], 果物: ['リンゴ', 'ミカン', 'バナナ']},
        third: {牛: ['米沢牛', '松坂牛', '飛騨牛'], 豚: ['黒豚', 'アグー豚', '三元豚'], 鶏: ['比内地鶏', '名古屋コーチン', '軍鶏'], ジャガイモ: ['男爵', 'メークイン'], 人参: ['人参', '金時人参', '高麗人参'], 玉ねぎ: ['国産', '外国産'], リンゴ: ['フジ', '秋映'], ミカン: ['文旦', 'デコポン', '温州ミカン'], バナナ: ['台湾産', 'フィリピン産']}
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
                      label="食材" value={firstSelection} options={firstOptions} onChange={handleFirstSelection}
            />
            <Dropdown labelID="second-select-label"
                      label="材料" value={secondSelection} options={secondOptions}
                      onChange={handleSecondSelection}

            />
            <Dropdown labelID="third-select-label"
                      label="詳細" value={thirdSelection}
                      options={thirdOptions} onChange={handleThirdSelection}
            />
        </Box>
    )
}

