import {FinanceModel} from "../models/FinanceModel";
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const FinanceService = [
    new FinanceModel(
        "Earnings", 
        "928.41", 
        "118.41", 
        true, 
        faDollarSign, 
        12.8,
    ),
    new FinanceModel(
        "Spendings", 
        "168.43", 
        "5.2", 
        false, 
        faDollarSign, 
        3.1,
    ),
]

export default FinanceService;
