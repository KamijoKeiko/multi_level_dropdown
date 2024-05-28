import {useItemSelection} from "./useItemSelection.tsx";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {responseData} from "./responseData.ts";

export const Apply = () => {
  const {
    selectedItem,
    filteredItems,
    selectedSubItem,
    handleItemChange,
    handleSubItemChange,
    uniqueItems
  } = useItemSelection(responseData)

  return (
    <Box display="flex" gap={5} flexWrap="wrap">
      <FormControl variant="outlined" margin="normal" sx={{minWidth: 200}}>
        <InputLabel>デバイス種別</InputLabel>
        <Select
          labelId="first-select-label"
          label="機器"
          value={selectedItem}
          onChange={handleItemChange}>

          {uniqueItems.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}

        </Select>
      </FormControl>
      <FormControl variant="outlined" margin="normal" sx={{minWidth: 200}}>
        <InputLabel>メーカー名_機種名</InputLabel>
        <Select
          labelId="second-select-label"
          label="機種"
          value={selectedSubItem}
          onChange={handleSubItemChange}>

          {filteredItems.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}

        </Select></FormControl>
    </Box>
  )
}