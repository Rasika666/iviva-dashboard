import React, {useEffect} from 'react';
import Graph from '../components/Graph';
import CircularProgress from '@material-ui/core/CircularProgress'
import '../css/main/style.scss'
import { useDispatch, useSelector } from 'react-redux';
import {getivivadata, dataLoaded} from '../actions/ivivaActions';
import CountUp from 'react-countup';

function Dashboard() {

	const dispatch = useDispatch();
	const rootstate = useSelector(state => state);

	const max_value = 50
	const total_objs = 300;

	useEffect(()=>{

		for (let last_index = 0; last_index < total_objs; last_index+=max_value) {
			getivivadata(dispatch, max_value, last_index);
		}

		dataLoaded(dispatch);
		
	}, [dispatch]);

	let equipement_type = {}
	let operationa_state = {
		'operational': 0,
		'non-operational': 0
	}
	
	if (!rootstate.iviva.isLoading) {
		for (let i= 0; i < rootstate.iviva.ivivadata.length; i++) {
			if (rootstate.iviva.ivivadata[i].AssetCategoryID in equipement_type) {
				equipement_type[rootstate.iviva.ivivadata[i].AssetCategoryID] += 1
				
			} else {
				equipement_type[rootstate.iviva.ivivadata[i].AssetCategoryID] = 1
			}
	
			if(rootstate.iviva.ivivadata[i].OperationalStatus === "Operational") {
				operationa_state['operational'] += 1
			}else if (rootstate.iviva.ivivadata[i].OperationalStatus === "Non-Operational") {
				operationa_state['non-operational'] += 1
			}
		}

	}

	

	return (
		<div className="container">
			<header>iviva Equipment Dashboard</header>

			<section className="detail-panel">

				<div className="detail-panel__box">
					<h2 className="detail-panel__name">
						Operational
					</h2>
					<p className="detail-panel__count">{rootstate.iviva.isloading ? <CircularProgress /> : <CountUp end={operationa_state['operational']} duration={5}/>}</p>
				</div> {/* !detail-panel__box*/}

				<div className="detail-panel__box">
					<h2 className="detail-panel__name">
						Non-Operational
					</h2>
					<p className="detail-panel__count">{rootstate.iviva.isloading ? <CircularProgress /> : <CountUp end={operationa_state['non-operational']} duration={5} />}</p>
				</div> {/* !detail-panel__box*/}
			</section>{/* !detail-panel*/}

			<section className="graph">
				
				<div className="graph__content">
					
					<Graph data_obj={equipement_type}/>
				</div>
				
			</section>

		</div>
	)
}

export default Dashboard;
