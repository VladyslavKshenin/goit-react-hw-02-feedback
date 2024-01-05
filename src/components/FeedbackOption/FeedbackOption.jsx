import { List } from "./FeedbackOption.stayled"
import { Button} from 'antd';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map((option, index) => (
                <li key={index} >
                    <Button
                        type="primary"
                        onClick={onLeaveFeedback}
                        name={option}
                    >
                        {option}
                    </Button>
                </li>
            ))}
        </List>
    )   
}