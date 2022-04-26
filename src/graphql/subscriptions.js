/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newOnCreatePictrure = /* GraphQL */ `
  subscription NewOnCreatePictrure {
    newOnCreatePictrure {
      id
      name
      owner
      labels
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const newOnUpdatePicture = /* GraphQL */ `
  subscription NewOnUpdatePicture {
    newOnUpdatePicture {
      id
      name
      owner
      labels
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const newOnDeletePicture = /* GraphQL */ `
  subscription NewOnDeletePicture {
    newOnDeletePicture {
      id
      name
      owner
      labels
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String) {
    onCreatePicture(owner: $owner) {
      id
      name
      owner
      labels
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String) {
    onUpdatePicture(owner: $owner) {
      id
      name
      owner
      labels
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String) {
    onDeletePicture(owner: $owner) {
      id
      name
      owner
      labels
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
