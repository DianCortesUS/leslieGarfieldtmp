import {apiClient} from './api-client';

function getAgents() {
  return apiClient(`/agents`);
}

function getAgent(id) {
  return apiClient(`/agent/${id}`);
}

export {getAgents, getAgent};
