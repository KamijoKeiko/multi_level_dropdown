import {useState} from "react";
import {SelectChangeEvent} from "@mui/material";

export type ItemType = {
  "service_id": number,
  "service_individual_temporary_master_id": number,
  "language": number,
  "master_column_id": number,
  "master_row_id": number,
  "service_name": string,
  "master_explanation": string,
  "master_column_name": string,
  "data_type": string,
  "master_value": string,
  "usage_start_date": string,
  "usage_end_date": string,
  "temporary_display_order": number,
  "temporary_row_display_order": number,
  "temporary_column_display_order": number,
  "is_multilingual": number,
  "row_language": number,
  "row_version": number,
  "row_created_at": string,
  "row_created_pg_id": string,
  "row_created_by": string,
  "row_updated_at": string,
  "row_updated_pg_id": string,
  "row_updated_by": string
}


export const useItemSelection = (items: ItemType[]) => {
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<string[]>([])
  const [selectedSubItem, setSelectedSubItem] = useState<string>('')


  const handleItemChange = (e: SelectChangeEvent<string>) => {
    const itemName = e.target.value
    setSelectedItem(itemName)

    const filteredItems = items
      .filter(item => item.master_column_name === itemName)
      .map(item => item.master_value)

    setFilteredItems(filteredItems)
  }

  const handleSubItemChange = (e: SelectChangeEvent<string>) => {
    const subItemName = e.target.value
    setSelectedSubItem(subItemName)

  }

  const uniqueItems = Array.from(new Set(items.map(item => item.master_column_name)))

  return {
    selectedItem,
    filteredItems,
    selectedSubItem,
    handleItemChange,
    handleSubItemChange,
    uniqueItems
  }

}