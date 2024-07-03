import apiClient from "./api-client";

interface entity{
    id: number
}

class HttpService {
endpoint: string;

constructor(endpoint: string) {
    this.endpoint = endpoint;
}

    getAll<t>() {
        const controller = new AbortController();
        const request = apiClient.get<t[]>(this.endpoint, {
          signal: controller.signal,
        })

    return {request, cancel : () => controller.abort()}
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/"+ id)
    }

    add<T>(entity: T){
        return apiClient.post(this.endpoint, entity)
    }

    update<T extends entity>(entity: T){
        return apiClient.patch(this.endpoint + "/" +entity.id, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;