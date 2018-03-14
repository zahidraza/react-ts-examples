import Hello from '../components/Hello';
import * as actions from '../actions/';
import { EnthusiamState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

// export function mapStateToProps({ enthusiasmLevel, languageName }: EnthusiamState) {
//   return {
//     enthusiasmLevel,
//     name: languageName,
//   };
// }

// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//   };
// }

const mapStateToProps = ({enthusiasmLevel, languageName}: EnthusiamState) => ({enthusiasmLevel, name: languageName});

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.decrementEnthusiasm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);