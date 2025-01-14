import { ISelected } from "../../../types/selected";
import { USERSELECTION_TYPEKEYS } from "../typeKeys";

export interface ISelectProjectTypeAction {
  type: USERSELECTION_TYPEKEYS.SELECT_PROJECT_TYPE;
  payload: ISelected;
}
