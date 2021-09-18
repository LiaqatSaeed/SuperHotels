const DomainURL = "http://localhost:5000/api";

export const getToken = async () => {
  const data = localStorage.getItem("token");
  if (data) {
    return `bearer ${JSON.parse(data).token}`;
  }
  return null;
};

//region Fetch Mechanism
export const GetSecured = async (URL) => {
  let token = await getToken();

  if (token != null) {
    let response = await fetch(`${DomainURL}${URL}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return await ReturnResponse(response);
  }
};

export const PostSecured = async (URL, params) => {
  let token = await getToken();
  if (token != null) {
    let response = await fetch(`${DomainURL}${URL}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      method: "POST",
      body: JSON.stringify(params),
    });
    return await ReturnResponse(response);
  }
};

export const PutSecured = async (URL, params) => {
  let token = await getToken();
  if (token != null) {
    let response = await fetch(`${DomainURL}${URL}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      method: "PUT",
      body: JSON.stringify(params),
    });
    return await ReturnResponse(response);
  }
};

export const DeleteSecured = async (URL) => {
  let token = await getToken();

  if (token != null) {
    let response = await fetch(`${DomainURL}${URL}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      method: "DELETE",
    });
    return await ReturnResponse(response);
  }
};

export const Post = async (URL, params) => {
  let response = await fetch(`${DomainURL}${URL}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(params),
  });

  return await ReturnResponse(response);
};

export const Get = async (URL) => {
  let response = await fetch(`${DomainURL}${URL}`);
  return await ReturnResponse(response);
};

export const ReturnResponse = async (response) => {
  if (response.ok) {
    let responseJson = await response.clone().json();
    return responseJson;
  } else {
    response = {
      error: "error",
      status: response.status,
      error_description:
        response.statusText !== undefined
          ? response.statusText
          : "Unable to process Your request Please contact your admin",
    };
    return response;
  }
};

export default DomainURL;
