/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  approvedClient?: Maybe<Client>;
  approvedClientAggregate?: Maybe<AdminClientApprovedClientAggregationSelection>;
  approvedClientConnection: AdminApprovedClientConnection;
  approvedVendor?: Maybe<Vendor>;
  approvedVendorAggregate?: Maybe<AdminVendorApprovedVendorAggregationSelection>;
  approvedVendorConnection: AdminApprovedVendorConnection;
  createdCommunicationticket?: Maybe<CommunicationTicket>;
  createdCommunicationticketAggregate?: Maybe<AdminCommunicationTicketCreatedCommunicationticketAggregationSelection>;
  createdCommunicationticketConnection: AdminCreatedCommunicationticketConnection;
  createdInvoice?: Maybe<Invoice>;
  createdInvoiceAggregate?: Maybe<AdminInvoiceCreatedInvoiceAggregationSelection>;
  createdInvoiceConnection: AdminCreatedInvoiceConnection;
  createdNotification?: Maybe<Notification>;
  createdNotificationAggregate?: Maybe<AdminNotificationCreatedNotificationAggregationSelection>;
  createdNotificationConnection: AdminCreatedNotificationConnection;
  createdPage?: Maybe<Page>;
  createdPageAggregate?: Maybe<AdminPageCreatedPageAggregationSelection>;
  createdPageConnection: AdminCreatedPageConnection;
  createdProjectticket?: Maybe<ProjectTicket>;
  createdProjectticketAggregate?: Maybe<AdminProjectTicketCreatedProjectticketAggregationSelection>;
  createdProjectticketConnection: AdminCreatedProjectticketConnection;
  createdRole?: Maybe<Role>;
  createdRoleAggregate?: Maybe<AdminRoleCreatedRoleAggregationSelection>;
  createdRoleConnection: AdminCreatedRoleConnection;
  createdSupportticket?: Maybe<SupportTicket>;
  createdSupportticketAggregate?: Maybe<AdminSupportTicketCreatedSupportticketAggregationSelection>;
  createdSupportticketConnection: AdminCreatedSupportticketConnection;
  hasLeads?: Maybe<Leads>;
  hasLeadsAggregate?: Maybe<AdminLeadsHasLeadsAggregationSelection>;
  hasLeadsConnection: AdminHasLeadsConnection;
  hasProject?: Maybe<Project>;
  hasProjectAggregate?: Maybe<AdminProjectHasProjectAggregationSelection>;
  hasProjectConnection: AdminHasProjectConnection;
  id: Scalars['ID']['output'];
  invoiceHas?: Maybe<Invoice>;
  invoiceHasAggregate?: Maybe<AdminInvoiceInvoiceHasAggregationSelection>;
  invoiceHasConnection: AdminInvoiceHasConnection;
  userIs?: Maybe<User>;
  userIsAggregate?: Maybe<AdminUserUserIsAggregationSelection>;
  userIsConnection: AdminUserIsConnection;
};


export type AdminApprovedClientArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type AdminApprovedClientAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type AdminApprovedClientConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminApprovedClientConnectionSort>>;
  where?: InputMaybe<AdminApprovedClientConnectionWhere>;
};


export type AdminApprovedVendorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type AdminApprovedVendorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type AdminApprovedVendorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminApprovedVendorConnectionSort>>;
  where?: InputMaybe<AdminApprovedVendorConnectionWhere>;
};


export type AdminCreatedCommunicationticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommunicationTicketOptions>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type AdminCreatedCommunicationticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type AdminCreatedCommunicationticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedCommunicationticketConnectionSort>>;
  where?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
};


export type AdminCreatedInvoiceArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<InvoiceOptions>;
  where?: InputMaybe<InvoiceWhere>;
};


export type AdminCreatedInvoiceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InvoiceWhere>;
};


export type AdminCreatedInvoiceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedInvoiceConnectionSort>>;
  where?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
};


export type AdminCreatedNotificationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NotificationOptions>;
  where?: InputMaybe<NotificationWhere>;
};


export type AdminCreatedNotificationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NotificationWhere>;
};


export type AdminCreatedNotificationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedNotificationConnectionSort>>;
  where?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
};


export type AdminCreatedPageArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PageOptions>;
  where?: InputMaybe<PageWhere>;
};


export type AdminCreatedPageAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageWhere>;
};


export type AdminCreatedPageConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedPageConnectionSort>>;
  where?: InputMaybe<AdminCreatedPageConnectionWhere>;
};


export type AdminCreatedProjectticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectTicketOptions>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type AdminCreatedProjectticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type AdminCreatedProjectticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedProjectticketConnectionSort>>;
  where?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
};


export type AdminCreatedRoleArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RoleOptions>;
  where?: InputMaybe<RoleWhere>;
};


export type AdminCreatedRoleAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RoleWhere>;
};


export type AdminCreatedRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedRoleConnectionSort>>;
  where?: InputMaybe<AdminCreatedRoleConnectionWhere>;
};


export type AdminCreatedSupportticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SupportTicketOptions>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type AdminCreatedSupportticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type AdminCreatedSupportticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminCreatedSupportticketConnectionSort>>;
  where?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
};


export type AdminHasLeadsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LeadsOptions>;
  where?: InputMaybe<LeadsWhere>;
};


export type AdminHasLeadsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LeadsWhere>;
};


export type AdminHasLeadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminHasLeadsConnectionSort>>;
  where?: InputMaybe<AdminHasLeadsConnectionWhere>;
};


export type AdminHasProjectArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type AdminHasProjectAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type AdminHasProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminHasProjectConnectionSort>>;
  where?: InputMaybe<AdminHasProjectConnectionWhere>;
};


export type AdminInvoiceHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<InvoiceOptions>;
  where?: InputMaybe<InvoiceWhere>;
};


export type AdminInvoiceHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InvoiceWhere>;
};


export type AdminInvoiceHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminInvoiceHasConnectionSort>>;
  where?: InputMaybe<AdminInvoiceHasConnectionWhere>;
};


export type AdminUserIsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type AdminUserIsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type AdminUserIsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminUserIsConnectionSort>>;
  where?: InputMaybe<AdminUserIsConnectionWhere>;
};

export type AdminAggregateSelection = {
  __typename?: 'AdminAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type AdminApprovedClientAggregateInput = {
  AND?: InputMaybe<Array<AdminApprovedClientAggregateInput>>;
  NOT?: InputMaybe<AdminApprovedClientAggregateInput>;
  OR?: InputMaybe<Array<AdminApprovedClientAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminApprovedClientNodeAggregationWhereInput>;
};

export type AdminApprovedClientConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type AdminApprovedClientConnectOrCreateFieldInput = {
  onCreate: AdminApprovedClientConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type AdminApprovedClientConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type AdminApprovedClientConnection = {
  __typename?: 'AdminApprovedClientConnection';
  edges: Array<AdminApprovedClientRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminApprovedClientConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type AdminApprovedClientConnectionWhere = {
  AND?: InputMaybe<Array<AdminApprovedClientConnectionWhere>>;
  NOT?: InputMaybe<AdminApprovedClientConnectionWhere>;
  OR?: InputMaybe<Array<AdminApprovedClientConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type AdminApprovedClientCreateFieldInput = {
  node: ClientCreateInput;
};

export type AdminApprovedClientDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<AdminApprovedClientConnectionWhere>;
};

export type AdminApprovedClientDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<AdminApprovedClientConnectionWhere>;
};

export type AdminApprovedClientFieldInput = {
  connect?: InputMaybe<AdminApprovedClientConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminApprovedClientConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminApprovedClientCreateFieldInput>;
};

export type AdminApprovedClientNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminApprovedClientNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminApprovedClientNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminApprovedClientNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminApprovedClientRelationship = {
  __typename?: 'AdminApprovedClientRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type AdminApprovedClientUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type AdminApprovedClientUpdateFieldInput = {
  connect?: InputMaybe<AdminApprovedClientConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminApprovedClientConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminApprovedClientCreateFieldInput>;
  delete?: InputMaybe<AdminApprovedClientDeleteFieldInput>;
  disconnect?: InputMaybe<AdminApprovedClientDisconnectFieldInput>;
  update?: InputMaybe<AdminApprovedClientUpdateConnectionInput>;
  where?: InputMaybe<AdminApprovedClientConnectionWhere>;
};

export type AdminApprovedVendorAggregateInput = {
  AND?: InputMaybe<Array<AdminApprovedVendorAggregateInput>>;
  NOT?: InputMaybe<AdminApprovedVendorAggregateInput>;
  OR?: InputMaybe<Array<AdminApprovedVendorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminApprovedVendorNodeAggregationWhereInput>;
};

export type AdminApprovedVendorConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type AdminApprovedVendorConnectOrCreateFieldInput = {
  onCreate: AdminApprovedVendorConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type AdminApprovedVendorConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type AdminApprovedVendorConnection = {
  __typename?: 'AdminApprovedVendorConnection';
  edges: Array<AdminApprovedVendorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminApprovedVendorConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type AdminApprovedVendorConnectionWhere = {
  AND?: InputMaybe<Array<AdminApprovedVendorConnectionWhere>>;
  NOT?: InputMaybe<AdminApprovedVendorConnectionWhere>;
  OR?: InputMaybe<Array<AdminApprovedVendorConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type AdminApprovedVendorCreateFieldInput = {
  node: VendorCreateInput;
};

export type AdminApprovedVendorDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<AdminApprovedVendorConnectionWhere>;
};

export type AdminApprovedVendorDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<AdminApprovedVendorConnectionWhere>;
};

export type AdminApprovedVendorFieldInput = {
  connect?: InputMaybe<AdminApprovedVendorConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminApprovedVendorConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminApprovedVendorCreateFieldInput>;
};

export type AdminApprovedVendorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminApprovedVendorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminApprovedVendorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminApprovedVendorNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminApprovedVendorRelationship = {
  __typename?: 'AdminApprovedVendorRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type AdminApprovedVendorUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type AdminApprovedVendorUpdateFieldInput = {
  connect?: InputMaybe<AdminApprovedVendorConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminApprovedVendorConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminApprovedVendorCreateFieldInput>;
  delete?: InputMaybe<AdminApprovedVendorDeleteFieldInput>;
  disconnect?: InputMaybe<AdminApprovedVendorDisconnectFieldInput>;
  update?: InputMaybe<AdminApprovedVendorUpdateConnectionInput>;
  where?: InputMaybe<AdminApprovedVendorConnectionWhere>;
};

export type AdminClientApprovedClientAggregationSelection = {
  __typename?: 'AdminClientApprovedClientAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminClientApprovedClientNodeAggregateSelection>;
};

export type AdminClientApprovedClientNodeAggregateSelection = {
  __typename?: 'AdminClientApprovedClientNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type AdminCommunicationTicketCreatedCommunicationticketAggregationSelection = {
  __typename?: 'AdminCommunicationTicketCreatedCommunicationticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminCommunicationTicketCreatedCommunicationticketNodeAggregateSelection>;
};

export type AdminCommunicationTicketCreatedCommunicationticketNodeAggregateSelection = {
  __typename?: 'AdminCommunicationTicketCreatedCommunicationticketNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  files: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  message: StringAggregateSelectionNullable;
  sub: StringAggregateSelectionNullable;
};

export type AdminConnectInput = {
  approvedClient?: InputMaybe<AdminApprovedClientConnectFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorConnectFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketConnectFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceConnectFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationConnectFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageConnectFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketConnectFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleConnectFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketConnectFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsConnectFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectConnectFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasConnectFieldInput>;
  userIs?: InputMaybe<AdminUserIsConnectFieldInput>;
};

export type AdminConnectOrCreateInput = {
  approvedClient?: InputMaybe<AdminApprovedClientConnectOrCreateFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorConnectOrCreateFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketConnectOrCreateFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceConnectOrCreateFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationConnectOrCreateFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageConnectOrCreateFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleConnectOrCreateFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketConnectOrCreateFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsConnectOrCreateFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectConnectOrCreateFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasConnectOrCreateFieldInput>;
  userIs?: InputMaybe<AdminUserIsConnectOrCreateFieldInput>;
};

export type AdminConnectOrCreateWhere = {
  node: AdminUniqueWhere;
};

export type AdminConnectWhere = {
  node: AdminWhere;
};

export type AdminCreateInput = {
  approvedClient?: InputMaybe<AdminApprovedClientFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasFieldInput>;
  userIs?: InputMaybe<AdminUserIsFieldInput>;
};

export type AdminCreatedCommunicationticketAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedCommunicationticketAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedCommunicationticketAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedCommunicationticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedCommunicationticketNodeAggregationWhereInput>;
};

export type AdminCreatedCommunicationticketConnectFieldInput = {
  connect?: InputMaybe<CommunicationTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommunicationTicketConnectWhere>;
};

export type AdminCreatedCommunicationticketConnectOrCreateFieldInput = {
  onCreate: AdminCreatedCommunicationticketConnectOrCreateFieldInputOnCreate;
  where: CommunicationTicketConnectOrCreateWhere;
};

export type AdminCreatedCommunicationticketConnectOrCreateFieldInputOnCreate = {
  node: CommunicationTicketOnCreateInput;
};

export type AdminCreatedCommunicationticketConnection = {
  __typename?: 'AdminCreatedCommunicationticketConnection';
  edges: Array<AdminCreatedCommunicationticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedCommunicationticketConnectionSort = {
  node?: InputMaybe<CommunicationTicketSort>;
};

export type AdminCreatedCommunicationticketConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedCommunicationticketConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedCommunicationticketConnectionWhere>>;
  node?: InputMaybe<CommunicationTicketWhere>;
};

export type AdminCreatedCommunicationticketCreateFieldInput = {
  node: CommunicationTicketCreateInput;
};

export type AdminCreatedCommunicationticketDeleteFieldInput = {
  delete?: InputMaybe<CommunicationTicketDeleteInput>;
  where?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
};

export type AdminCreatedCommunicationticketDisconnectFieldInput = {
  disconnect?: InputMaybe<CommunicationTicketDisconnectInput>;
  where?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
};

export type AdminCreatedCommunicationticketFieldInput = {
  connect?: InputMaybe<AdminCreatedCommunicationticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedCommunicationticketConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedCommunicationticketCreateFieldInput>;
};

export type AdminCreatedCommunicationticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedCommunicationticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedCommunicationticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedCommunicationticketNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  files_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  files_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedCommunicationticketRelationship = {
  __typename?: 'AdminCreatedCommunicationticketRelationship';
  cursor: Scalars['String']['output'];
  node: CommunicationTicket;
};

export type AdminCreatedCommunicationticketUpdateConnectionInput = {
  node?: InputMaybe<CommunicationTicketUpdateInput>;
};

export type AdminCreatedCommunicationticketUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedCommunicationticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedCommunicationticketConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedCommunicationticketCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedCommunicationticketDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedCommunicationticketDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedCommunicationticketUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
};

export type AdminCreatedInvoiceAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedInvoiceAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedInvoiceAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedInvoiceAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedInvoiceNodeAggregationWhereInput>;
};

export type AdminCreatedInvoiceConnectFieldInput = {
  connect?: InputMaybe<InvoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<InvoiceConnectWhere>;
};

export type AdminCreatedInvoiceConnectOrCreateFieldInput = {
  onCreate: AdminCreatedInvoiceConnectOrCreateFieldInputOnCreate;
  where: InvoiceConnectOrCreateWhere;
};

export type AdminCreatedInvoiceConnectOrCreateFieldInputOnCreate = {
  node: InvoiceOnCreateInput;
};

export type AdminCreatedInvoiceConnection = {
  __typename?: 'AdminCreatedInvoiceConnection';
  edges: Array<AdminCreatedInvoiceRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedInvoiceConnectionSort = {
  node?: InputMaybe<InvoiceSort>;
};

export type AdminCreatedInvoiceConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedInvoiceConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedInvoiceConnectionWhere>>;
  node?: InputMaybe<InvoiceWhere>;
};

export type AdminCreatedInvoiceCreateFieldInput = {
  node: InvoiceCreateInput;
};

export type AdminCreatedInvoiceDeleteFieldInput = {
  delete?: InputMaybe<InvoiceDeleteInput>;
  where?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
};

export type AdminCreatedInvoiceDisconnectFieldInput = {
  disconnect?: InputMaybe<InvoiceDisconnectInput>;
  where?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
};

export type AdminCreatedInvoiceFieldInput = {
  connect?: InputMaybe<AdminCreatedInvoiceConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedInvoiceConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedInvoiceCreateFieldInput>;
};

export type AdminCreatedInvoiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedInvoiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedInvoiceNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedInvoiceNodeAggregationWhereInput>>;
  clientAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  priceWithTax_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedInvoiceRelationship = {
  __typename?: 'AdminCreatedInvoiceRelationship';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

export type AdminCreatedInvoiceUpdateConnectionInput = {
  node?: InputMaybe<InvoiceUpdateInput>;
};

export type AdminCreatedInvoiceUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedInvoiceConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedInvoiceConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedInvoiceCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedInvoiceDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedInvoiceDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedInvoiceUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
};

export type AdminCreatedNotificationAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedNotificationAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedNotificationAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedNotificationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedNotificationNodeAggregationWhereInput>;
};

export type AdminCreatedNotificationConnectFieldInput = {
  connect?: InputMaybe<NotificationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NotificationConnectWhere>;
};

export type AdminCreatedNotificationConnectOrCreateFieldInput = {
  onCreate: AdminCreatedNotificationConnectOrCreateFieldInputOnCreate;
  where: NotificationConnectOrCreateWhere;
};

export type AdminCreatedNotificationConnectOrCreateFieldInputOnCreate = {
  node: NotificationOnCreateInput;
};

export type AdminCreatedNotificationConnection = {
  __typename?: 'AdminCreatedNotificationConnection';
  edges: Array<AdminCreatedNotificationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedNotificationConnectionSort = {
  node?: InputMaybe<NotificationSort>;
};

export type AdminCreatedNotificationConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedNotificationConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedNotificationConnectionWhere>>;
  node?: InputMaybe<NotificationWhere>;
};

export type AdminCreatedNotificationCreateFieldInput = {
  node: NotificationCreateInput;
};

export type AdminCreatedNotificationDeleteFieldInput = {
  delete?: InputMaybe<NotificationDeleteInput>;
  where?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
};

export type AdminCreatedNotificationDisconnectFieldInput = {
  disconnect?: InputMaybe<NotificationDisconnectInput>;
  where?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
};

export type AdminCreatedNotificationFieldInput = {
  connect?: InputMaybe<AdminCreatedNotificationConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedNotificationConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedNotificationCreateFieldInput>;
};

export type AdminCreatedNotificationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedNotificationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedNotificationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedNotificationNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedNotificationRelationship = {
  __typename?: 'AdminCreatedNotificationRelationship';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type AdminCreatedNotificationUpdateConnectionInput = {
  node?: InputMaybe<NotificationUpdateInput>;
};

export type AdminCreatedNotificationUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedNotificationConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedNotificationConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedNotificationCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedNotificationDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedNotificationDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedNotificationUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
};

export type AdminCreatedPageAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedPageAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedPageAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedPageAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedPageNodeAggregationWhereInput>;
};

export type AdminCreatedPageConnectFieldInput = {
  connect?: InputMaybe<PageConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PageConnectWhere>;
};

export type AdminCreatedPageConnectOrCreateFieldInput = {
  onCreate: AdminCreatedPageConnectOrCreateFieldInputOnCreate;
  where: PageConnectOrCreateWhere;
};

export type AdminCreatedPageConnectOrCreateFieldInputOnCreate = {
  node: PageOnCreateInput;
};

export type AdminCreatedPageConnection = {
  __typename?: 'AdminCreatedPageConnection';
  edges: Array<AdminCreatedPageRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedPageConnectionSort = {
  node?: InputMaybe<PageSort>;
};

export type AdminCreatedPageConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedPageConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedPageConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedPageConnectionWhere>>;
  node?: InputMaybe<PageWhere>;
};

export type AdminCreatedPageCreateFieldInput = {
  node: PageCreateInput;
};

export type AdminCreatedPageDeleteFieldInput = {
  delete?: InputMaybe<PageDeleteInput>;
  where?: InputMaybe<AdminCreatedPageConnectionWhere>;
};

export type AdminCreatedPageDisconnectFieldInput = {
  disconnect?: InputMaybe<PageDisconnectInput>;
  where?: InputMaybe<AdminCreatedPageConnectionWhere>;
};

export type AdminCreatedPageFieldInput = {
  connect?: InputMaybe<AdminCreatedPageConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedPageConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedPageCreateFieldInput>;
};

export type AdminCreatedPageNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedPageNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedPageNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedPageNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  subtitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  subtitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  subtitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  subtitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  subtitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  subtitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  subtitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  subtitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  subtitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  subtitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  subtitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  subtitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  subtitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  subtitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  subtitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedPageRelationship = {
  __typename?: 'AdminCreatedPageRelationship';
  cursor: Scalars['String']['output'];
  node: Page;
};

export type AdminCreatedPageUpdateConnectionInput = {
  node?: InputMaybe<PageUpdateInput>;
};

export type AdminCreatedPageUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedPageConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedPageConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedPageCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedPageDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedPageDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedPageUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedPageConnectionWhere>;
};

export type AdminCreatedProjectticketAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedProjectticketAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedProjectticketAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedProjectticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedProjectticketNodeAggregationWhereInput>;
};

export type AdminCreatedProjectticketConnectFieldInput = {
  connect?: InputMaybe<ProjectTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectTicketConnectWhere>;
};

export type AdminCreatedProjectticketConnection = {
  __typename?: 'AdminCreatedProjectticketConnection';
  edges: Array<AdminCreatedProjectticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedProjectticketConnectionSort = {
  node?: InputMaybe<ProjectTicketSort>;
};

export type AdminCreatedProjectticketConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedProjectticketConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedProjectticketConnectionWhere>>;
  node?: InputMaybe<ProjectTicketWhere>;
};

export type AdminCreatedProjectticketCreateFieldInput = {
  node: ProjectTicketCreateInput;
};

export type AdminCreatedProjectticketDeleteFieldInput = {
  delete?: InputMaybe<ProjectTicketDeleteInput>;
  where?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
};

export type AdminCreatedProjectticketDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectTicketDisconnectInput>;
  where?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
};

export type AdminCreatedProjectticketFieldInput = {
  connect?: InputMaybe<AdminCreatedProjectticketConnectFieldInput>;
  create?: InputMaybe<AdminCreatedProjectticketCreateFieldInput>;
};

export type AdminCreatedProjectticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedProjectticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedProjectticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedProjectticketNodeAggregationWhereInput>>;
  projectTicket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedProjectticketRelationship = {
  __typename?: 'AdminCreatedProjectticketRelationship';
  cursor: Scalars['String']['output'];
  node: ProjectTicket;
};

export type AdminCreatedProjectticketUpdateConnectionInput = {
  node?: InputMaybe<ProjectTicketUpdateInput>;
};

export type AdminCreatedProjectticketUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedProjectticketConnectFieldInput>;
  create?: InputMaybe<AdminCreatedProjectticketCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedProjectticketDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedProjectticketDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedProjectticketUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
};

export type AdminCreatedRoleAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedRoleAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedRoleAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedRoleAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedRoleNodeAggregationWhereInput>;
};

export type AdminCreatedRoleConnectFieldInput = {
  connect?: InputMaybe<RoleConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RoleConnectWhere>;
};

export type AdminCreatedRoleConnectOrCreateFieldInput = {
  onCreate: AdminCreatedRoleConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
};

export type AdminCreatedRoleConnectOrCreateFieldInputOnCreate = {
  node: RoleOnCreateInput;
};

export type AdminCreatedRoleConnection = {
  __typename?: 'AdminCreatedRoleConnection';
  edges: Array<AdminCreatedRoleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedRoleConnectionSort = {
  node?: InputMaybe<RoleSort>;
};

export type AdminCreatedRoleConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedRoleConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedRoleConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedRoleConnectionWhere>>;
  node?: InputMaybe<RoleWhere>;
};

export type AdminCreatedRoleCreateFieldInput = {
  node: RoleCreateInput;
};

export type AdminCreatedRoleDeleteFieldInput = {
  delete?: InputMaybe<RoleDeleteInput>;
  where?: InputMaybe<AdminCreatedRoleConnectionWhere>;
};

export type AdminCreatedRoleDisconnectFieldInput = {
  disconnect?: InputMaybe<RoleDisconnectInput>;
  where?: InputMaybe<AdminCreatedRoleConnectionWhere>;
};

export type AdminCreatedRoleFieldInput = {
  connect?: InputMaybe<AdminCreatedRoleConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedRoleConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedRoleCreateFieldInput>;
};

export type AdminCreatedRoleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedRoleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedRoleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedRoleNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedRoleRelationship = {
  __typename?: 'AdminCreatedRoleRelationship';
  cursor: Scalars['String']['output'];
  node: Role;
};

export type AdminCreatedRoleUpdateConnectionInput = {
  node?: InputMaybe<RoleUpdateInput>;
};

export type AdminCreatedRoleUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedRoleConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedRoleConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedRoleCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedRoleDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedRoleDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedRoleUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedRoleConnectionWhere>;
};

export type AdminCreatedSupportticketAggregateInput = {
  AND?: InputMaybe<Array<AdminCreatedSupportticketAggregateInput>>;
  NOT?: InputMaybe<AdminCreatedSupportticketAggregateInput>;
  OR?: InputMaybe<Array<AdminCreatedSupportticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminCreatedSupportticketNodeAggregationWhereInput>;
};

export type AdminCreatedSupportticketConnectFieldInput = {
  connect?: InputMaybe<SupportTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SupportTicketConnectWhere>;
};

export type AdminCreatedSupportticketConnectOrCreateFieldInput = {
  onCreate: AdminCreatedSupportticketConnectOrCreateFieldInputOnCreate;
  where: SupportTicketConnectOrCreateWhere;
};

export type AdminCreatedSupportticketConnectOrCreateFieldInputOnCreate = {
  node: SupportTicketOnCreateInput;
};

export type AdminCreatedSupportticketConnection = {
  __typename?: 'AdminCreatedSupportticketConnection';
  edges: Array<AdminCreatedSupportticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminCreatedSupportticketConnectionSort = {
  node?: InputMaybe<SupportTicketSort>;
};

export type AdminCreatedSupportticketConnectionWhere = {
  AND?: InputMaybe<Array<AdminCreatedSupportticketConnectionWhere>>;
  NOT?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
  OR?: InputMaybe<Array<AdminCreatedSupportticketConnectionWhere>>;
  node?: InputMaybe<SupportTicketWhere>;
};

export type AdminCreatedSupportticketCreateFieldInput = {
  node: SupportTicketCreateInput;
};

export type AdminCreatedSupportticketDeleteFieldInput = {
  delete?: InputMaybe<SupportTicketDeleteInput>;
  where?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
};

export type AdminCreatedSupportticketDisconnectFieldInput = {
  disconnect?: InputMaybe<SupportTicketDisconnectInput>;
  where?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
};

export type AdminCreatedSupportticketFieldInput = {
  connect?: InputMaybe<AdminCreatedSupportticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedSupportticketConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedSupportticketCreateFieldInput>;
};

export type AdminCreatedSupportticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminCreatedSupportticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminCreatedSupportticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminCreatedSupportticketNodeAggregationWhereInput>>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCreatedSupportticketRelationship = {
  __typename?: 'AdminCreatedSupportticketRelationship';
  cursor: Scalars['String']['output'];
  node: SupportTicket;
};

export type AdminCreatedSupportticketUpdateConnectionInput = {
  node?: InputMaybe<SupportTicketUpdateInput>;
};

export type AdminCreatedSupportticketUpdateFieldInput = {
  connect?: InputMaybe<AdminCreatedSupportticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminCreatedSupportticketConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminCreatedSupportticketCreateFieldInput>;
  delete?: InputMaybe<AdminCreatedSupportticketDeleteFieldInput>;
  disconnect?: InputMaybe<AdminCreatedSupportticketDisconnectFieldInput>;
  update?: InputMaybe<AdminCreatedSupportticketUpdateConnectionInput>;
  where?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
};

export type AdminDeleteInput = {
  approvedClient?: InputMaybe<AdminApprovedClientDeleteFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorDeleteFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketDeleteFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceDeleteFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationDeleteFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageDeleteFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketDeleteFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleDeleteFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketDeleteFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsDeleteFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectDeleteFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasDeleteFieldInput>;
  userIs?: InputMaybe<AdminUserIsDeleteFieldInput>;
};

export type AdminDisconnectInput = {
  approvedClient?: InputMaybe<AdminApprovedClientDisconnectFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorDisconnectFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketDisconnectFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceDisconnectFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationDisconnectFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageDisconnectFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketDisconnectFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleDisconnectFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketDisconnectFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsDisconnectFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectDisconnectFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasDisconnectFieldInput>;
  userIs?: InputMaybe<AdminUserIsDisconnectFieldInput>;
};

export type AdminEdge = {
  __typename?: 'AdminEdge';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type AdminHasLeadsAggregateInput = {
  AND?: InputMaybe<Array<AdminHasLeadsAggregateInput>>;
  NOT?: InputMaybe<AdminHasLeadsAggregateInput>;
  OR?: InputMaybe<Array<AdminHasLeadsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminHasLeadsNodeAggregationWhereInput>;
};

export type AdminHasLeadsConnectFieldInput = {
  connect?: InputMaybe<LeadsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LeadsConnectWhere>;
};

export type AdminHasLeadsConnectOrCreateFieldInput = {
  onCreate: AdminHasLeadsConnectOrCreateFieldInputOnCreate;
  where: LeadsConnectOrCreateWhere;
};

export type AdminHasLeadsConnectOrCreateFieldInputOnCreate = {
  node: LeadsOnCreateInput;
};

export type AdminHasLeadsConnection = {
  __typename?: 'AdminHasLeadsConnection';
  edges: Array<AdminHasLeadsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminHasLeadsConnectionSort = {
  node?: InputMaybe<LeadsSort>;
};

export type AdminHasLeadsConnectionWhere = {
  AND?: InputMaybe<Array<AdminHasLeadsConnectionWhere>>;
  NOT?: InputMaybe<AdminHasLeadsConnectionWhere>;
  OR?: InputMaybe<Array<AdminHasLeadsConnectionWhere>>;
  node?: InputMaybe<LeadsWhere>;
};

export type AdminHasLeadsCreateFieldInput = {
  node: LeadsCreateInput;
};

export type AdminHasLeadsDeleteFieldInput = {
  delete?: InputMaybe<LeadsDeleteInput>;
  where?: InputMaybe<AdminHasLeadsConnectionWhere>;
};

export type AdminHasLeadsDisconnectFieldInput = {
  disconnect?: InputMaybe<LeadsDisconnectInput>;
  where?: InputMaybe<AdminHasLeadsConnectionWhere>;
};

export type AdminHasLeadsFieldInput = {
  connect?: InputMaybe<AdminHasLeadsConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminHasLeadsConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminHasLeadsCreateFieldInput>;
};

export type AdminHasLeadsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminHasLeadsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminHasLeadsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminHasLeadsNodeAggregationWhereInput>>;
  condition_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  condition_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  duration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  duration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  industry_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  industry_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  price_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminHasLeadsRelationship = {
  __typename?: 'AdminHasLeadsRelationship';
  cursor: Scalars['String']['output'];
  node: Leads;
};

export type AdminHasLeadsUpdateConnectionInput = {
  node?: InputMaybe<LeadsUpdateInput>;
};

export type AdminHasLeadsUpdateFieldInput = {
  connect?: InputMaybe<AdminHasLeadsConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminHasLeadsConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminHasLeadsCreateFieldInput>;
  delete?: InputMaybe<AdminHasLeadsDeleteFieldInput>;
  disconnect?: InputMaybe<AdminHasLeadsDisconnectFieldInput>;
  update?: InputMaybe<AdminHasLeadsUpdateConnectionInput>;
  where?: InputMaybe<AdminHasLeadsConnectionWhere>;
};

export type AdminHasProjectAggregateInput = {
  AND?: InputMaybe<Array<AdminHasProjectAggregateInput>>;
  NOT?: InputMaybe<AdminHasProjectAggregateInput>;
  OR?: InputMaybe<Array<AdminHasProjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminHasProjectNodeAggregationWhereInput>;
};

export type AdminHasProjectConnectFieldInput = {
  connect?: InputMaybe<ProjectConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type AdminHasProjectConnectOrCreateFieldInput = {
  onCreate: AdminHasProjectConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type AdminHasProjectConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type AdminHasProjectConnection = {
  __typename?: 'AdminHasProjectConnection';
  edges: Array<AdminHasProjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminHasProjectConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type AdminHasProjectConnectionWhere = {
  AND?: InputMaybe<Array<AdminHasProjectConnectionWhere>>;
  NOT?: InputMaybe<AdminHasProjectConnectionWhere>;
  OR?: InputMaybe<Array<AdminHasProjectConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type AdminHasProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type AdminHasProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<AdminHasProjectConnectionWhere>;
};

export type AdminHasProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<AdminHasProjectConnectionWhere>;
};

export type AdminHasProjectFieldInput = {
  connect?: InputMaybe<AdminHasProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminHasProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminHasProjectCreateFieldInput>;
};

export type AdminHasProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminHasProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminHasProjectNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminHasProjectNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  country_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gst_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminHasProjectRelationship = {
  __typename?: 'AdminHasProjectRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type AdminHasProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type AdminHasProjectUpdateFieldInput = {
  connect?: InputMaybe<AdminHasProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminHasProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminHasProjectCreateFieldInput>;
  delete?: InputMaybe<AdminHasProjectDeleteFieldInput>;
  disconnect?: InputMaybe<AdminHasProjectDisconnectFieldInput>;
  update?: InputMaybe<AdminHasProjectUpdateConnectionInput>;
  where?: InputMaybe<AdminHasProjectConnectionWhere>;
};

export type AdminInvoiceCreatedInvoiceAggregationSelection = {
  __typename?: 'AdminInvoiceCreatedInvoiceAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminInvoiceCreatedInvoiceNodeAggregateSelection>;
};

export type AdminInvoiceCreatedInvoiceNodeAggregateSelection = {
  __typename?: 'AdminInvoiceCreatedInvoiceNodeAggregateSelection';
  clientAddress: StringAggregateSelectionNullable;
  clientEmail: StringAggregateSelectionNullable;
  clientName: StringAggregateSelectionNullable;
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  priceWithTax: IntAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type AdminInvoiceHasAggregateInput = {
  AND?: InputMaybe<Array<AdminInvoiceHasAggregateInput>>;
  NOT?: InputMaybe<AdminInvoiceHasAggregateInput>;
  OR?: InputMaybe<Array<AdminInvoiceHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminInvoiceHasNodeAggregationWhereInput>;
};

export type AdminInvoiceHasConnectFieldInput = {
  connect?: InputMaybe<InvoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<InvoiceConnectWhere>;
};

export type AdminInvoiceHasConnectOrCreateFieldInput = {
  onCreate: AdminInvoiceHasConnectOrCreateFieldInputOnCreate;
  where: InvoiceConnectOrCreateWhere;
};

export type AdminInvoiceHasConnectOrCreateFieldInputOnCreate = {
  node: InvoiceOnCreateInput;
};

export type AdminInvoiceHasConnection = {
  __typename?: 'AdminInvoiceHasConnection';
  edges: Array<AdminInvoiceHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminInvoiceHasConnectionSort = {
  node?: InputMaybe<InvoiceSort>;
};

export type AdminInvoiceHasConnectionWhere = {
  AND?: InputMaybe<Array<AdminInvoiceHasConnectionWhere>>;
  NOT?: InputMaybe<AdminInvoiceHasConnectionWhere>;
  OR?: InputMaybe<Array<AdminInvoiceHasConnectionWhere>>;
  node?: InputMaybe<InvoiceWhere>;
};

export type AdminInvoiceHasCreateFieldInput = {
  node: InvoiceCreateInput;
};

export type AdminInvoiceHasDeleteFieldInput = {
  delete?: InputMaybe<InvoiceDeleteInput>;
  where?: InputMaybe<AdminInvoiceHasConnectionWhere>;
};

export type AdminInvoiceHasDisconnectFieldInput = {
  disconnect?: InputMaybe<InvoiceDisconnectInput>;
  where?: InputMaybe<AdminInvoiceHasConnectionWhere>;
};

export type AdminInvoiceHasFieldInput = {
  connect?: InputMaybe<AdminInvoiceHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminInvoiceHasConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminInvoiceHasCreateFieldInput>;
};

export type AdminInvoiceHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminInvoiceHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminInvoiceHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminInvoiceHasNodeAggregationWhereInput>>;
  clientAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  priceWithTax_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminInvoiceHasRelationship = {
  __typename?: 'AdminInvoiceHasRelationship';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

export type AdminInvoiceHasUpdateConnectionInput = {
  node?: InputMaybe<InvoiceUpdateInput>;
};

export type AdminInvoiceHasUpdateFieldInput = {
  connect?: InputMaybe<AdminInvoiceHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminInvoiceHasConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminInvoiceHasCreateFieldInput>;
  delete?: InputMaybe<AdminInvoiceHasDeleteFieldInput>;
  disconnect?: InputMaybe<AdminInvoiceHasDisconnectFieldInput>;
  update?: InputMaybe<AdminInvoiceHasUpdateConnectionInput>;
  where?: InputMaybe<AdminInvoiceHasConnectionWhere>;
};

export type AdminInvoiceInvoiceHasAggregationSelection = {
  __typename?: 'AdminInvoiceInvoiceHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminInvoiceInvoiceHasNodeAggregateSelection>;
};

export type AdminInvoiceInvoiceHasNodeAggregateSelection = {
  __typename?: 'AdminInvoiceInvoiceHasNodeAggregateSelection';
  clientAddress: StringAggregateSelectionNullable;
  clientEmail: StringAggregateSelectionNullable;
  clientName: StringAggregateSelectionNullable;
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  priceWithTax: IntAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type AdminLeadsHasLeadsAggregationSelection = {
  __typename?: 'AdminLeadsHasLeadsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminLeadsHasLeadsNodeAggregateSelection>;
};

export type AdminLeadsHasLeadsNodeAggregateSelection = {
  __typename?: 'AdminLeadsHasLeadsNodeAggregateSelection';
  condition: StringAggregateSelectionNullable;
  createdAt: StringAggregateSelectionNullable;
  duration: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  industry: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  vendorAddress: StringAggregateSelectionNullable;
};

export type AdminNotificationCreatedNotificationAggregationSelection = {
  __typename?: 'AdminNotificationCreatedNotificationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminNotificationCreatedNotificationNodeAggregateSelection>;
};

export type AdminNotificationCreatedNotificationNodeAggregateSelection = {
  __typename?: 'AdminNotificationCreatedNotificationNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
};

export type AdminOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdminOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AdminSort objects to sort Admins by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AdminSort>>;
};

export type AdminPageCreatedPageAggregationSelection = {
  __typename?: 'AdminPageCreatedPageAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminPageCreatedPageNodeAggregateSelection>;
};

export type AdminPageCreatedPageNodeAggregateSelection = {
  __typename?: 'AdminPageCreatedPageNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  subtitle: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type AdminProjectHasProjectAggregationSelection = {
  __typename?: 'AdminProjectHasProjectAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminProjectHasProjectNodeAggregateSelection>;
};

export type AdminProjectHasProjectNodeAggregateSelection = {
  __typename?: 'AdminProjectHasProjectNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  country: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type AdminProjectTicketCreatedProjectticketAggregationSelection = {
  __typename?: 'AdminProjectTicketCreatedProjectticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminProjectTicketCreatedProjectticketNodeAggregateSelection>;
};

export type AdminProjectTicketCreatedProjectticketNodeAggregateSelection = {
  __typename?: 'AdminProjectTicketCreatedProjectticketNodeAggregateSelection';
  projectTicket: StringAggregateSelectionNullable;
};

export type AdminRelationInput = {
  approvedClient?: InputMaybe<AdminApprovedClientCreateFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorCreateFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketCreateFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceCreateFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationCreateFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageCreateFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketCreateFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleCreateFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketCreateFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsCreateFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectCreateFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasCreateFieldInput>;
  userIs?: InputMaybe<AdminUserIsCreateFieldInput>;
};

export type AdminRoleCreatedRoleAggregationSelection = {
  __typename?: 'AdminRoleCreatedRoleAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminRoleCreatedRoleNodeAggregateSelection>;
};

export type AdminRoleCreatedRoleNodeAggregateSelection = {
  __typename?: 'AdminRoleCreatedRoleNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

/** Fields to sort Admins by. The order in which sorts are applied is not guaranteed when specifying many fields in one AdminSort object. */
export type AdminSort = {
  id?: InputMaybe<SortDirection>;
};

export type AdminSupportTicketCreatedSupportticketAggregationSelection = {
  __typename?: 'AdminSupportTicketCreatedSupportticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminSupportTicketCreatedSupportticketNodeAggregateSelection>;
};

export type AdminSupportTicketCreatedSupportticketNodeAggregateSelection = {
  __typename?: 'AdminSupportTicketCreatedSupportticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type AdminUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminUpdateInput = {
  approvedClient?: InputMaybe<AdminApprovedClientUpdateFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorUpdateFieldInput>;
  createdCommunicationticket?: InputMaybe<AdminCreatedCommunicationticketUpdateFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceUpdateFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationUpdateFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageUpdateFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketUpdateFieldInput>;
  createdRole?: InputMaybe<AdminCreatedRoleUpdateFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketUpdateFieldInput>;
  hasLeads?: InputMaybe<AdminHasLeadsUpdateFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectUpdateFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasUpdateFieldInput>;
  userIs?: InputMaybe<AdminUserIsUpdateFieldInput>;
};

export type AdminUserIsAggregateInput = {
  AND?: InputMaybe<Array<AdminUserIsAggregateInput>>;
  NOT?: InputMaybe<AdminUserIsAggregateInput>;
  OR?: InputMaybe<Array<AdminUserIsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AdminUserIsNodeAggregationWhereInput>;
};

export type AdminUserIsConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type AdminUserIsConnectOrCreateFieldInput = {
  onCreate: AdminUserIsConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type AdminUserIsConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type AdminUserIsConnection = {
  __typename?: 'AdminUserIsConnection';
  edges: Array<AdminUserIsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AdminUserIsConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type AdminUserIsConnectionWhere = {
  AND?: InputMaybe<Array<AdminUserIsConnectionWhere>>;
  NOT?: InputMaybe<AdminUserIsConnectionWhere>;
  OR?: InputMaybe<Array<AdminUserIsConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type AdminUserIsCreateFieldInput = {
  node: UserCreateInput;
};

export type AdminUserIsDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<AdminUserIsConnectionWhere>;
};

export type AdminUserIsDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<AdminUserIsConnectionWhere>;
};

export type AdminUserIsFieldInput = {
  connect?: InputMaybe<AdminUserIsConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminUserIsConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminUserIsCreateFieldInput>;
};

export type AdminUserIsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AdminUserIsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AdminUserIsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AdminUserIsNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUserIsRelationship = {
  __typename?: 'AdminUserIsRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type AdminUserIsUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type AdminUserIsUpdateFieldInput = {
  connect?: InputMaybe<AdminUserIsConnectFieldInput>;
  connectOrCreate?: InputMaybe<AdminUserIsConnectOrCreateFieldInput>;
  create?: InputMaybe<AdminUserIsCreateFieldInput>;
  delete?: InputMaybe<AdminUserIsDeleteFieldInput>;
  disconnect?: InputMaybe<AdminUserIsDisconnectFieldInput>;
  update?: InputMaybe<AdminUserIsUpdateConnectionInput>;
  where?: InputMaybe<AdminUserIsConnectionWhere>;
};

export type AdminUserUserIsAggregationSelection = {
  __typename?: 'AdminUserUserIsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminUserUserIsNodeAggregateSelection>;
};

export type AdminUserUserIsNodeAggregateSelection = {
  __typename?: 'AdminUserUserIsNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type AdminVendorApprovedVendorAggregationSelection = {
  __typename?: 'AdminVendorApprovedVendorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminVendorApprovedVendorNodeAggregateSelection>;
};

export type AdminVendorApprovedVendorNodeAggregateSelection = {
  __typename?: 'AdminVendorApprovedVendorNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type AdminWhere = {
  AND?: InputMaybe<Array<AdminWhere>>;
  NOT?: InputMaybe<AdminWhere>;
  OR?: InputMaybe<Array<AdminWhere>>;
  approvedClient?: InputMaybe<ClientWhere>;
  approvedClientAggregate?: InputMaybe<AdminApprovedClientAggregateInput>;
  approvedClientConnection?: InputMaybe<AdminApprovedClientConnectionWhere>;
  approvedClientConnection_NOT?: InputMaybe<AdminApprovedClientConnectionWhere>;
  approvedClient_NOT?: InputMaybe<ClientWhere>;
  approvedVendor?: InputMaybe<VendorWhere>;
  approvedVendorAggregate?: InputMaybe<AdminApprovedVendorAggregateInput>;
  approvedVendorConnection?: InputMaybe<AdminApprovedVendorConnectionWhere>;
  approvedVendorConnection_NOT?: InputMaybe<AdminApprovedVendorConnectionWhere>;
  approvedVendor_NOT?: InputMaybe<VendorWhere>;
  createdCommunicationticket?: InputMaybe<CommunicationTicketWhere>;
  createdCommunicationticketAggregate?: InputMaybe<AdminCreatedCommunicationticketAggregateInput>;
  createdCommunicationticketConnection?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
  createdCommunicationticketConnection_NOT?: InputMaybe<AdminCreatedCommunicationticketConnectionWhere>;
  createdCommunicationticket_NOT?: InputMaybe<CommunicationTicketWhere>;
  createdInvoice?: InputMaybe<InvoiceWhere>;
  createdInvoiceAggregate?: InputMaybe<AdminCreatedInvoiceAggregateInput>;
  createdInvoiceConnection?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
  createdInvoiceConnection_NOT?: InputMaybe<AdminCreatedInvoiceConnectionWhere>;
  createdInvoice_NOT?: InputMaybe<InvoiceWhere>;
  createdNotification?: InputMaybe<NotificationWhere>;
  createdNotificationAggregate?: InputMaybe<AdminCreatedNotificationAggregateInput>;
  createdNotificationConnection?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
  createdNotificationConnection_NOT?: InputMaybe<AdminCreatedNotificationConnectionWhere>;
  createdNotification_NOT?: InputMaybe<NotificationWhere>;
  createdPage?: InputMaybe<PageWhere>;
  createdPageAggregate?: InputMaybe<AdminCreatedPageAggregateInput>;
  createdPageConnection?: InputMaybe<AdminCreatedPageConnectionWhere>;
  createdPageConnection_NOT?: InputMaybe<AdminCreatedPageConnectionWhere>;
  createdPage_NOT?: InputMaybe<PageWhere>;
  createdProjectticket?: InputMaybe<ProjectTicketWhere>;
  createdProjectticketAggregate?: InputMaybe<AdminCreatedProjectticketAggregateInput>;
  createdProjectticketConnection?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
  createdProjectticketConnection_NOT?: InputMaybe<AdminCreatedProjectticketConnectionWhere>;
  createdProjectticket_NOT?: InputMaybe<ProjectTicketWhere>;
  createdRole?: InputMaybe<RoleWhere>;
  createdRoleAggregate?: InputMaybe<AdminCreatedRoleAggregateInput>;
  createdRoleConnection?: InputMaybe<AdminCreatedRoleConnectionWhere>;
  createdRoleConnection_NOT?: InputMaybe<AdminCreatedRoleConnectionWhere>;
  createdRole_NOT?: InputMaybe<RoleWhere>;
  createdSupportticket?: InputMaybe<SupportTicketWhere>;
  createdSupportticketAggregate?: InputMaybe<AdminCreatedSupportticketAggregateInput>;
  createdSupportticketConnection?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
  createdSupportticketConnection_NOT?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
  createdSupportticket_NOT?: InputMaybe<SupportTicketWhere>;
  hasLeads?: InputMaybe<LeadsWhere>;
  hasLeadsAggregate?: InputMaybe<AdminHasLeadsAggregateInput>;
  hasLeadsConnection?: InputMaybe<AdminHasLeadsConnectionWhere>;
  hasLeadsConnection_NOT?: InputMaybe<AdminHasLeadsConnectionWhere>;
  hasLeads_NOT?: InputMaybe<LeadsWhere>;
  hasProject?: InputMaybe<ProjectWhere>;
  hasProjectAggregate?: InputMaybe<AdminHasProjectAggregateInput>;
  hasProjectConnection?: InputMaybe<AdminHasProjectConnectionWhere>;
  hasProjectConnection_NOT?: InputMaybe<AdminHasProjectConnectionWhere>;
  hasProject_NOT?: InputMaybe<ProjectWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  invoiceHas?: InputMaybe<InvoiceWhere>;
  invoiceHasAggregate?: InputMaybe<AdminInvoiceHasAggregateInput>;
  invoiceHasConnection?: InputMaybe<AdminInvoiceHasConnectionWhere>;
  invoiceHasConnection_NOT?: InputMaybe<AdminInvoiceHasConnectionWhere>;
  invoiceHas_NOT?: InputMaybe<InvoiceWhere>;
  userIs?: InputMaybe<UserWhere>;
  userIsAggregate?: InputMaybe<AdminUserIsAggregateInput>;
  userIsConnection?: InputMaybe<AdminUserIsConnectionWhere>;
  userIsConnection_NOT?: InputMaybe<AdminUserIsConnectionWhere>;
  userIs_NOT?: InputMaybe<UserWhere>;
};

export type AdminsConnection = {
  __typename?: 'AdminsConnection';
  edges: Array<AdminEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Client = {
  __typename?: 'Client';
  adminApproved?: Maybe<Admin>;
  adminApprovedAggregate?: Maybe<ClientAdminAdminApprovedAggregationSelection>;
  adminApprovedConnection: ClientAdminApprovedConnection;
  communicationticketFor?: Maybe<CommunicationTicket>;
  communicationticketForAggregate?: Maybe<ClientCommunicationTicketCommunicationticketForAggregationSelection>;
  communicationticketForConnection: ClientCommunicationticketForConnection;
  hasLeads?: Maybe<Leads>;
  hasLeadsAggregate?: Maybe<ClientLeadsHasLeadsAggregationSelection>;
  hasLeadsConnection: ClientHasLeadsConnection;
  hasModuleticket?: Maybe<ModuleTicket>;
  hasModuleticketAggregate?: Maybe<ClientModuleTicketHasModuleticketAggregationSelection>;
  hasModuleticketConnection: ClientHasModuleticketConnection;
  hasNotification?: Maybe<Notification>;
  hasNotificationAggregate?: Maybe<ClientNotificationHasNotificationAggregationSelection>;
  hasNotificationConnection: ClientHasNotificationConnection;
  hasReply?: Maybe<Reply>;
  hasReplyAggregate?: Maybe<ClientReplyHasReplyAggregationSelection>;
  hasReplyConnection: ClientHasReplyConnection;
  hasSupportticket?: Maybe<SupportTicket>;
  hasSupportticketAggregate?: Maybe<ClientSupportTicketHasSupportticketAggregationSelection>;
  hasSupportticketConnection: ClientHasSupportticketConnection;
  id: Scalars['ID']['output'];
  invoiceHas?: Maybe<Invoice>;
  invoiceHasAggregate?: Maybe<ClientInvoiceInvoiceHasAggregationSelection>;
  invoiceHasConnection: ClientInvoiceHasConnection;
  orderedProject?: Maybe<Project>;
  orderedProjectAggregate?: Maybe<ClientProjectOrderedProjectAggregationSelection>;
  orderedProjectConnection: ClientOrderedProjectConnection;
  sub_type?: Maybe<Scalars['String']['output']>;
  userIs?: Maybe<User>;
  userIsAggregate?: Maybe<ClientUserUserIsAggregationSelection>;
  userIsConnection: ClientUserIsConnection;
};


export type ClientAdminApprovedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type ClientAdminApprovedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type ClientAdminApprovedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientAdminApprovedConnectionSort>>;
  where?: InputMaybe<ClientAdminApprovedConnectionWhere>;
};


export type ClientCommunicationticketForArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommunicationTicketOptions>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type ClientCommunicationticketForAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type ClientCommunicationticketForConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientCommunicationticketForConnectionSort>>;
  where?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
};


export type ClientHasLeadsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LeadsOptions>;
  where?: InputMaybe<LeadsWhere>;
};


export type ClientHasLeadsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LeadsWhere>;
};


export type ClientHasLeadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientHasLeadsConnectionSort>>;
  where?: InputMaybe<ClientHasLeadsConnectionWhere>;
};


export type ClientHasModuleticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ClientHasModuleticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ClientHasModuleticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientHasModuleticketConnectionSort>>;
  where?: InputMaybe<ClientHasModuleticketConnectionWhere>;
};


export type ClientHasNotificationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NotificationOptions>;
  where?: InputMaybe<NotificationWhere>;
};


export type ClientHasNotificationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NotificationWhere>;
};


export type ClientHasNotificationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientHasNotificationConnectionSort>>;
  where?: InputMaybe<ClientHasNotificationConnectionWhere>;
};


export type ClientHasReplyArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ReplyOptions>;
  where?: InputMaybe<ReplyWhere>;
};


export type ClientHasReplyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReplyWhere>;
};


export type ClientHasReplyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientHasReplyConnectionSort>>;
  where?: InputMaybe<ClientHasReplyConnectionWhere>;
};


export type ClientHasSupportticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SupportTicketOptions>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type ClientHasSupportticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type ClientHasSupportticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientHasSupportticketConnectionSort>>;
  where?: InputMaybe<ClientHasSupportticketConnectionWhere>;
};


export type ClientInvoiceHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<InvoiceOptions>;
  where?: InputMaybe<InvoiceWhere>;
};


export type ClientInvoiceHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InvoiceWhere>;
};


export type ClientInvoiceHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientInvoiceHasConnectionSort>>;
  where?: InputMaybe<ClientInvoiceHasConnectionWhere>;
};


export type ClientOrderedProjectArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ClientOrderedProjectAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ClientOrderedProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientOrderedProjectConnectionSort>>;
  where?: InputMaybe<ClientOrderedProjectConnectionWhere>;
};


export type ClientUserIsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type ClientUserIsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type ClientUserIsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientUserIsConnectionSort>>;
  where?: InputMaybe<ClientUserIsConnectionWhere>;
};

export type ClientAdminAdminApprovedAggregationSelection = {
  __typename?: 'ClientAdminAdminApprovedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientAdminAdminApprovedNodeAggregateSelection>;
};

export type ClientAdminAdminApprovedNodeAggregateSelection = {
  __typename?: 'ClientAdminAdminApprovedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ClientAdminApprovedAggregateInput = {
  AND?: InputMaybe<Array<ClientAdminApprovedAggregateInput>>;
  NOT?: InputMaybe<ClientAdminApprovedAggregateInput>;
  OR?: InputMaybe<Array<ClientAdminApprovedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientAdminApprovedNodeAggregationWhereInput>;
};

export type ClientAdminApprovedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type ClientAdminApprovedConnectOrCreateFieldInput = {
  onCreate: ClientAdminApprovedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type ClientAdminApprovedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type ClientAdminApprovedConnection = {
  __typename?: 'ClientAdminApprovedConnection';
  edges: Array<ClientAdminApprovedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientAdminApprovedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type ClientAdminApprovedConnectionWhere = {
  AND?: InputMaybe<Array<ClientAdminApprovedConnectionWhere>>;
  NOT?: InputMaybe<ClientAdminApprovedConnectionWhere>;
  OR?: InputMaybe<Array<ClientAdminApprovedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type ClientAdminApprovedCreateFieldInput = {
  node: AdminCreateInput;
};

export type ClientAdminApprovedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<ClientAdminApprovedConnectionWhere>;
};

export type ClientAdminApprovedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<ClientAdminApprovedConnectionWhere>;
};

export type ClientAdminApprovedFieldInput = {
  connect?: InputMaybe<ClientAdminApprovedConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientAdminApprovedConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientAdminApprovedCreateFieldInput>;
};

export type ClientAdminApprovedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientAdminApprovedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientAdminApprovedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientAdminApprovedNodeAggregationWhereInput>>;
};

export type ClientAdminApprovedRelationship = {
  __typename?: 'ClientAdminApprovedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type ClientAdminApprovedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type ClientAdminApprovedUpdateFieldInput = {
  connect?: InputMaybe<ClientAdminApprovedConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientAdminApprovedConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientAdminApprovedCreateFieldInput>;
  delete?: InputMaybe<ClientAdminApprovedDeleteFieldInput>;
  disconnect?: InputMaybe<ClientAdminApprovedDisconnectFieldInput>;
  update?: InputMaybe<ClientAdminApprovedUpdateConnectionInput>;
  where?: InputMaybe<ClientAdminApprovedConnectionWhere>;
};

export type ClientAggregateSelection = {
  __typename?: 'ClientAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ClientCommunicationTicketCommunicationticketForAggregationSelection = {
  __typename?: 'ClientCommunicationTicketCommunicationticketForAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientCommunicationTicketCommunicationticketForNodeAggregateSelection>;
};

export type ClientCommunicationTicketCommunicationticketForNodeAggregateSelection = {
  __typename?: 'ClientCommunicationTicketCommunicationticketForNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  files: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  message: StringAggregateSelectionNullable;
  sub: StringAggregateSelectionNullable;
};

export type ClientCommunicationticketForAggregateInput = {
  AND?: InputMaybe<Array<ClientCommunicationticketForAggregateInput>>;
  NOT?: InputMaybe<ClientCommunicationticketForAggregateInput>;
  OR?: InputMaybe<Array<ClientCommunicationticketForAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientCommunicationticketForNodeAggregationWhereInput>;
};

export type ClientCommunicationticketForConnectFieldInput = {
  connect?: InputMaybe<CommunicationTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommunicationTicketConnectWhere>;
};

export type ClientCommunicationticketForConnectOrCreateFieldInput = {
  onCreate: ClientCommunicationticketForConnectOrCreateFieldInputOnCreate;
  where: CommunicationTicketConnectOrCreateWhere;
};

export type ClientCommunicationticketForConnectOrCreateFieldInputOnCreate = {
  node: CommunicationTicketOnCreateInput;
};

export type ClientCommunicationticketForConnection = {
  __typename?: 'ClientCommunicationticketForConnection';
  edges: Array<ClientCommunicationticketForRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientCommunicationticketForConnectionSort = {
  node?: InputMaybe<CommunicationTicketSort>;
};

export type ClientCommunicationticketForConnectionWhere = {
  AND?: InputMaybe<Array<ClientCommunicationticketForConnectionWhere>>;
  NOT?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
  OR?: InputMaybe<Array<ClientCommunicationticketForConnectionWhere>>;
  node?: InputMaybe<CommunicationTicketWhere>;
};

export type ClientCommunicationticketForCreateFieldInput = {
  node: CommunicationTicketCreateInput;
};

export type ClientCommunicationticketForDeleteFieldInput = {
  delete?: InputMaybe<CommunicationTicketDeleteInput>;
  where?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
};

export type ClientCommunicationticketForDisconnectFieldInput = {
  disconnect?: InputMaybe<CommunicationTicketDisconnectInput>;
  where?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
};

export type ClientCommunicationticketForFieldInput = {
  connect?: InputMaybe<ClientCommunicationticketForConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientCommunicationticketForConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientCommunicationticketForCreateFieldInput>;
};

export type ClientCommunicationticketForNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientCommunicationticketForNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientCommunicationticketForNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientCommunicationticketForNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  files_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  files_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientCommunicationticketForRelationship = {
  __typename?: 'ClientCommunicationticketForRelationship';
  cursor: Scalars['String']['output'];
  node: CommunicationTicket;
};

export type ClientCommunicationticketForUpdateConnectionInput = {
  node?: InputMaybe<CommunicationTicketUpdateInput>;
};

export type ClientCommunicationticketForUpdateFieldInput = {
  connect?: InputMaybe<ClientCommunicationticketForConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientCommunicationticketForConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientCommunicationticketForCreateFieldInput>;
  delete?: InputMaybe<ClientCommunicationticketForDeleteFieldInput>;
  disconnect?: InputMaybe<ClientCommunicationticketForDisconnectFieldInput>;
  update?: InputMaybe<ClientCommunicationticketForUpdateConnectionInput>;
  where?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
};

export type ClientConnectInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedConnectFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForConnectFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsConnectFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketConnectFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationConnectFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyConnectFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketConnectFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasConnectFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectConnectFieldInput>;
  userIs?: InputMaybe<ClientUserIsConnectFieldInput>;
};

export type ClientConnectOrCreateInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedConnectOrCreateFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForConnectOrCreateFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsConnectOrCreateFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketConnectOrCreateFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationConnectOrCreateFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyConnectOrCreateFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketConnectOrCreateFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasConnectOrCreateFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectConnectOrCreateFieldInput>;
  userIs?: InputMaybe<ClientUserIsConnectOrCreateFieldInput>;
};

export type ClientConnectOrCreateWhere = {
  node: ClientUniqueWhere;
};

export type ClientConnectWhere = {
  node: ClientWhere;
};

export type ClientCreateInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectFieldInput>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  userIs?: InputMaybe<ClientUserIsFieldInput>;
};

export type ClientDeleteInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedDeleteFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForDeleteFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsDeleteFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketDeleteFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationDeleteFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyDeleteFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketDeleteFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasDeleteFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectDeleteFieldInput>;
  userIs?: InputMaybe<ClientUserIsDeleteFieldInput>;
};

export type ClientDisconnectInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedDisconnectFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForDisconnectFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsDisconnectFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketDisconnectFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationDisconnectFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyDisconnectFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketDisconnectFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasDisconnectFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectDisconnectFieldInput>;
  userIs?: InputMaybe<ClientUserIsDisconnectFieldInput>;
};

export type ClientEdge = {
  __typename?: 'ClientEdge';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type ClientHasLeadsAggregateInput = {
  AND?: InputMaybe<Array<ClientHasLeadsAggregateInput>>;
  NOT?: InputMaybe<ClientHasLeadsAggregateInput>;
  OR?: InputMaybe<Array<ClientHasLeadsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientHasLeadsNodeAggregationWhereInput>;
};

export type ClientHasLeadsConnectFieldInput = {
  connect?: InputMaybe<LeadsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LeadsConnectWhere>;
};

export type ClientHasLeadsConnectOrCreateFieldInput = {
  onCreate: ClientHasLeadsConnectOrCreateFieldInputOnCreate;
  where: LeadsConnectOrCreateWhere;
};

export type ClientHasLeadsConnectOrCreateFieldInputOnCreate = {
  node: LeadsOnCreateInput;
};

export type ClientHasLeadsConnection = {
  __typename?: 'ClientHasLeadsConnection';
  edges: Array<ClientHasLeadsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientHasLeadsConnectionSort = {
  node?: InputMaybe<LeadsSort>;
};

export type ClientHasLeadsConnectionWhere = {
  AND?: InputMaybe<Array<ClientHasLeadsConnectionWhere>>;
  NOT?: InputMaybe<ClientHasLeadsConnectionWhere>;
  OR?: InputMaybe<Array<ClientHasLeadsConnectionWhere>>;
  node?: InputMaybe<LeadsWhere>;
};

export type ClientHasLeadsCreateFieldInput = {
  node: LeadsCreateInput;
};

export type ClientHasLeadsDeleteFieldInput = {
  delete?: InputMaybe<LeadsDeleteInput>;
  where?: InputMaybe<ClientHasLeadsConnectionWhere>;
};

export type ClientHasLeadsDisconnectFieldInput = {
  disconnect?: InputMaybe<LeadsDisconnectInput>;
  where?: InputMaybe<ClientHasLeadsConnectionWhere>;
};

export type ClientHasLeadsFieldInput = {
  connect?: InputMaybe<ClientHasLeadsConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasLeadsConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasLeadsCreateFieldInput>;
};

export type ClientHasLeadsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientHasLeadsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientHasLeadsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientHasLeadsNodeAggregationWhereInput>>;
  condition_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  condition_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  duration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  duration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  industry_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  industry_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  price_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientHasLeadsRelationship = {
  __typename?: 'ClientHasLeadsRelationship';
  cursor: Scalars['String']['output'];
  node: Leads;
};

export type ClientHasLeadsUpdateConnectionInput = {
  node?: InputMaybe<LeadsUpdateInput>;
};

export type ClientHasLeadsUpdateFieldInput = {
  connect?: InputMaybe<ClientHasLeadsConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasLeadsConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasLeadsCreateFieldInput>;
  delete?: InputMaybe<ClientHasLeadsDeleteFieldInput>;
  disconnect?: InputMaybe<ClientHasLeadsDisconnectFieldInput>;
  update?: InputMaybe<ClientHasLeadsUpdateConnectionInput>;
  where?: InputMaybe<ClientHasLeadsConnectionWhere>;
};

export type ClientHasModuleticketAggregateInput = {
  AND?: InputMaybe<Array<ClientHasModuleticketAggregateInput>>;
  NOT?: InputMaybe<ClientHasModuleticketAggregateInput>;
  OR?: InputMaybe<Array<ClientHasModuleticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientHasModuleticketNodeAggregationWhereInput>;
};

export type ClientHasModuleticketConnectFieldInput = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleTicketConnectWhere>;
};

export type ClientHasModuleticketConnectOrCreateFieldInput = {
  onCreate: ClientHasModuleticketConnectOrCreateFieldInputOnCreate;
  where: ModuleTicketConnectOrCreateWhere;
};

export type ClientHasModuleticketConnectOrCreateFieldInputOnCreate = {
  node: ModuleTicketOnCreateInput;
};

export type ClientHasModuleticketConnection = {
  __typename?: 'ClientHasModuleticketConnection';
  edges: Array<ClientHasModuleticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientHasModuleticketConnectionSort = {
  node?: InputMaybe<ModuleTicketSort>;
};

export type ClientHasModuleticketConnectionWhere = {
  AND?: InputMaybe<Array<ClientHasModuleticketConnectionWhere>>;
  NOT?: InputMaybe<ClientHasModuleticketConnectionWhere>;
  OR?: InputMaybe<Array<ClientHasModuleticketConnectionWhere>>;
  node?: InputMaybe<ModuleTicketWhere>;
};

export type ClientHasModuleticketCreateFieldInput = {
  node: ModuleTicketCreateInput;
};

export type ClientHasModuleticketDeleteFieldInput = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<ClientHasModuleticketConnectionWhere>;
};

export type ClientHasModuleticketDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  where?: InputMaybe<ClientHasModuleticketConnectionWhere>;
};

export type ClientHasModuleticketFieldInput = {
  connect?: InputMaybe<ClientHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasModuleticketCreateFieldInput>;
};

export type ClientHasModuleticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientHasModuleticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientHasModuleticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientHasModuleticketNodeAggregationWhereInput>>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientHasModuleticketRelationship = {
  __typename?: 'ClientHasModuleticketRelationship';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type ClientHasModuleticketUpdateConnectionInput = {
  node?: InputMaybe<ModuleTicketUpdateInput>;
};

export type ClientHasModuleticketUpdateFieldInput = {
  connect?: InputMaybe<ClientHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasModuleticketCreateFieldInput>;
  delete?: InputMaybe<ClientHasModuleticketDeleteFieldInput>;
  disconnect?: InputMaybe<ClientHasModuleticketDisconnectFieldInput>;
  update?: InputMaybe<ClientHasModuleticketUpdateConnectionInput>;
  where?: InputMaybe<ClientHasModuleticketConnectionWhere>;
};

export type ClientHasNotificationAggregateInput = {
  AND?: InputMaybe<Array<ClientHasNotificationAggregateInput>>;
  NOT?: InputMaybe<ClientHasNotificationAggregateInput>;
  OR?: InputMaybe<Array<ClientHasNotificationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientHasNotificationNodeAggregationWhereInput>;
};

export type ClientHasNotificationConnectFieldInput = {
  connect?: InputMaybe<NotificationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NotificationConnectWhere>;
};

export type ClientHasNotificationConnectOrCreateFieldInput = {
  onCreate: ClientHasNotificationConnectOrCreateFieldInputOnCreate;
  where: NotificationConnectOrCreateWhere;
};

export type ClientHasNotificationConnectOrCreateFieldInputOnCreate = {
  node: NotificationOnCreateInput;
};

export type ClientHasNotificationConnection = {
  __typename?: 'ClientHasNotificationConnection';
  edges: Array<ClientHasNotificationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientHasNotificationConnectionSort = {
  node?: InputMaybe<NotificationSort>;
};

export type ClientHasNotificationConnectionWhere = {
  AND?: InputMaybe<Array<ClientHasNotificationConnectionWhere>>;
  NOT?: InputMaybe<ClientHasNotificationConnectionWhere>;
  OR?: InputMaybe<Array<ClientHasNotificationConnectionWhere>>;
  node?: InputMaybe<NotificationWhere>;
};

export type ClientHasNotificationCreateFieldInput = {
  node: NotificationCreateInput;
};

export type ClientHasNotificationDeleteFieldInput = {
  delete?: InputMaybe<NotificationDeleteInput>;
  where?: InputMaybe<ClientHasNotificationConnectionWhere>;
};

export type ClientHasNotificationDisconnectFieldInput = {
  disconnect?: InputMaybe<NotificationDisconnectInput>;
  where?: InputMaybe<ClientHasNotificationConnectionWhere>;
};

export type ClientHasNotificationFieldInput = {
  connect?: InputMaybe<ClientHasNotificationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasNotificationConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasNotificationCreateFieldInput>;
};

export type ClientHasNotificationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientHasNotificationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientHasNotificationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientHasNotificationNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientHasNotificationRelationship = {
  __typename?: 'ClientHasNotificationRelationship';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type ClientHasNotificationUpdateConnectionInput = {
  node?: InputMaybe<NotificationUpdateInput>;
};

export type ClientHasNotificationUpdateFieldInput = {
  connect?: InputMaybe<ClientHasNotificationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasNotificationConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasNotificationCreateFieldInput>;
  delete?: InputMaybe<ClientHasNotificationDeleteFieldInput>;
  disconnect?: InputMaybe<ClientHasNotificationDisconnectFieldInput>;
  update?: InputMaybe<ClientHasNotificationUpdateConnectionInput>;
  where?: InputMaybe<ClientHasNotificationConnectionWhere>;
};

export type ClientHasReplyAggregateInput = {
  AND?: InputMaybe<Array<ClientHasReplyAggregateInput>>;
  NOT?: InputMaybe<ClientHasReplyAggregateInput>;
  OR?: InputMaybe<Array<ClientHasReplyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientHasReplyNodeAggregationWhereInput>;
};

export type ClientHasReplyConnectFieldInput = {
  connect?: InputMaybe<ReplyConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ReplyConnectWhere>;
};

export type ClientHasReplyConnectOrCreateFieldInput = {
  onCreate: ClientHasReplyConnectOrCreateFieldInputOnCreate;
  where: ReplyConnectOrCreateWhere;
};

export type ClientHasReplyConnectOrCreateFieldInputOnCreate = {
  node: ReplyOnCreateInput;
};

export type ClientHasReplyConnection = {
  __typename?: 'ClientHasReplyConnection';
  edges: Array<ClientHasReplyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientHasReplyConnectionSort = {
  node?: InputMaybe<ReplySort>;
};

export type ClientHasReplyConnectionWhere = {
  AND?: InputMaybe<Array<ClientHasReplyConnectionWhere>>;
  NOT?: InputMaybe<ClientHasReplyConnectionWhere>;
  OR?: InputMaybe<Array<ClientHasReplyConnectionWhere>>;
  node?: InputMaybe<ReplyWhere>;
};

export type ClientHasReplyCreateFieldInput = {
  node: ReplyCreateInput;
};

export type ClientHasReplyDeleteFieldInput = {
  delete?: InputMaybe<ReplyDeleteInput>;
  where?: InputMaybe<ClientHasReplyConnectionWhere>;
};

export type ClientHasReplyDisconnectFieldInput = {
  disconnect?: InputMaybe<ReplyDisconnectInput>;
  where?: InputMaybe<ClientHasReplyConnectionWhere>;
};

export type ClientHasReplyFieldInput = {
  connect?: InputMaybe<ClientHasReplyConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasReplyConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasReplyCreateFieldInput>;
};

export type ClientHasReplyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientHasReplyNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientHasReplyNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientHasReplyNodeAggregationWhereInput>>;
  replyMessage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientHasReplyRelationship = {
  __typename?: 'ClientHasReplyRelationship';
  cursor: Scalars['String']['output'];
  node: Reply;
};

export type ClientHasReplyUpdateConnectionInput = {
  node?: InputMaybe<ReplyUpdateInput>;
};

export type ClientHasReplyUpdateFieldInput = {
  connect?: InputMaybe<ClientHasReplyConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasReplyConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasReplyCreateFieldInput>;
  delete?: InputMaybe<ClientHasReplyDeleteFieldInput>;
  disconnect?: InputMaybe<ClientHasReplyDisconnectFieldInput>;
  update?: InputMaybe<ClientHasReplyUpdateConnectionInput>;
  where?: InputMaybe<ClientHasReplyConnectionWhere>;
};

export type ClientHasSupportticketAggregateInput = {
  AND?: InputMaybe<Array<ClientHasSupportticketAggregateInput>>;
  NOT?: InputMaybe<ClientHasSupportticketAggregateInput>;
  OR?: InputMaybe<Array<ClientHasSupportticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientHasSupportticketNodeAggregationWhereInput>;
};

export type ClientHasSupportticketConnectFieldInput = {
  connect?: InputMaybe<SupportTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SupportTicketConnectWhere>;
};

export type ClientHasSupportticketConnectOrCreateFieldInput = {
  onCreate: ClientHasSupportticketConnectOrCreateFieldInputOnCreate;
  where: SupportTicketConnectOrCreateWhere;
};

export type ClientHasSupportticketConnectOrCreateFieldInputOnCreate = {
  node: SupportTicketOnCreateInput;
};

export type ClientHasSupportticketConnection = {
  __typename?: 'ClientHasSupportticketConnection';
  edges: Array<ClientHasSupportticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientHasSupportticketConnectionSort = {
  node?: InputMaybe<SupportTicketSort>;
};

export type ClientHasSupportticketConnectionWhere = {
  AND?: InputMaybe<Array<ClientHasSupportticketConnectionWhere>>;
  NOT?: InputMaybe<ClientHasSupportticketConnectionWhere>;
  OR?: InputMaybe<Array<ClientHasSupportticketConnectionWhere>>;
  node?: InputMaybe<SupportTicketWhere>;
};

export type ClientHasSupportticketCreateFieldInput = {
  node: SupportTicketCreateInput;
};

export type ClientHasSupportticketDeleteFieldInput = {
  delete?: InputMaybe<SupportTicketDeleteInput>;
  where?: InputMaybe<ClientHasSupportticketConnectionWhere>;
};

export type ClientHasSupportticketDisconnectFieldInput = {
  disconnect?: InputMaybe<SupportTicketDisconnectInput>;
  where?: InputMaybe<ClientHasSupportticketConnectionWhere>;
};

export type ClientHasSupportticketFieldInput = {
  connect?: InputMaybe<ClientHasSupportticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasSupportticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasSupportticketCreateFieldInput>;
};

export type ClientHasSupportticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientHasSupportticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientHasSupportticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientHasSupportticketNodeAggregationWhereInput>>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientHasSupportticketRelationship = {
  __typename?: 'ClientHasSupportticketRelationship';
  cursor: Scalars['String']['output'];
  node: SupportTicket;
};

export type ClientHasSupportticketUpdateConnectionInput = {
  node?: InputMaybe<SupportTicketUpdateInput>;
};

export type ClientHasSupportticketUpdateFieldInput = {
  connect?: InputMaybe<ClientHasSupportticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientHasSupportticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientHasSupportticketCreateFieldInput>;
  delete?: InputMaybe<ClientHasSupportticketDeleteFieldInput>;
  disconnect?: InputMaybe<ClientHasSupportticketDisconnectFieldInput>;
  update?: InputMaybe<ClientHasSupportticketUpdateConnectionInput>;
  where?: InputMaybe<ClientHasSupportticketConnectionWhere>;
};

export type ClientInvoiceHasAggregateInput = {
  AND?: InputMaybe<Array<ClientInvoiceHasAggregateInput>>;
  NOT?: InputMaybe<ClientInvoiceHasAggregateInput>;
  OR?: InputMaybe<Array<ClientInvoiceHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientInvoiceHasNodeAggregationWhereInput>;
};

export type ClientInvoiceHasConnectFieldInput = {
  connect?: InputMaybe<InvoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<InvoiceConnectWhere>;
};

export type ClientInvoiceHasConnectOrCreateFieldInput = {
  onCreate: ClientInvoiceHasConnectOrCreateFieldInputOnCreate;
  where: InvoiceConnectOrCreateWhere;
};

export type ClientInvoiceHasConnectOrCreateFieldInputOnCreate = {
  node: InvoiceOnCreateInput;
};

export type ClientInvoiceHasConnection = {
  __typename?: 'ClientInvoiceHasConnection';
  edges: Array<ClientInvoiceHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientInvoiceHasConnectionSort = {
  node?: InputMaybe<InvoiceSort>;
};

export type ClientInvoiceHasConnectionWhere = {
  AND?: InputMaybe<Array<ClientInvoiceHasConnectionWhere>>;
  NOT?: InputMaybe<ClientInvoiceHasConnectionWhere>;
  OR?: InputMaybe<Array<ClientInvoiceHasConnectionWhere>>;
  node?: InputMaybe<InvoiceWhere>;
};

export type ClientInvoiceHasCreateFieldInput = {
  node: InvoiceCreateInput;
};

export type ClientInvoiceHasDeleteFieldInput = {
  delete?: InputMaybe<InvoiceDeleteInput>;
  where?: InputMaybe<ClientInvoiceHasConnectionWhere>;
};

export type ClientInvoiceHasDisconnectFieldInput = {
  disconnect?: InputMaybe<InvoiceDisconnectInput>;
  where?: InputMaybe<ClientInvoiceHasConnectionWhere>;
};

export type ClientInvoiceHasFieldInput = {
  connect?: InputMaybe<ClientInvoiceHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientInvoiceHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientInvoiceHasCreateFieldInput>;
};

export type ClientInvoiceHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientInvoiceHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientInvoiceHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientInvoiceHasNodeAggregationWhereInput>>;
  clientAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  priceWithTax_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientInvoiceHasRelationship = {
  __typename?: 'ClientInvoiceHasRelationship';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

export type ClientInvoiceHasUpdateConnectionInput = {
  node?: InputMaybe<InvoiceUpdateInput>;
};

export type ClientInvoiceHasUpdateFieldInput = {
  connect?: InputMaybe<ClientInvoiceHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientInvoiceHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientInvoiceHasCreateFieldInput>;
  delete?: InputMaybe<ClientInvoiceHasDeleteFieldInput>;
  disconnect?: InputMaybe<ClientInvoiceHasDisconnectFieldInput>;
  update?: InputMaybe<ClientInvoiceHasUpdateConnectionInput>;
  where?: InputMaybe<ClientInvoiceHasConnectionWhere>;
};

export type ClientInvoiceInvoiceHasAggregationSelection = {
  __typename?: 'ClientInvoiceInvoiceHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientInvoiceInvoiceHasNodeAggregateSelection>;
};

export type ClientInvoiceInvoiceHasNodeAggregateSelection = {
  __typename?: 'ClientInvoiceInvoiceHasNodeAggregateSelection';
  clientAddress: StringAggregateSelectionNullable;
  clientEmail: StringAggregateSelectionNullable;
  clientName: StringAggregateSelectionNullable;
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  priceWithTax: IntAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type ClientLeadsHasLeadsAggregationSelection = {
  __typename?: 'ClientLeadsHasLeadsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientLeadsHasLeadsNodeAggregateSelection>;
};

export type ClientLeadsHasLeadsNodeAggregateSelection = {
  __typename?: 'ClientLeadsHasLeadsNodeAggregateSelection';
  condition: StringAggregateSelectionNullable;
  createdAt: StringAggregateSelectionNullable;
  duration: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  industry: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  vendorAddress: StringAggregateSelectionNullable;
};

export type ClientModuleTicketHasModuleticketAggregationSelection = {
  __typename?: 'ClientModuleTicketHasModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientModuleTicketHasModuleticketNodeAggregateSelection>;
};

export type ClientModuleTicketHasModuleticketNodeAggregateSelection = {
  __typename?: 'ClientModuleTicketHasModuleticketNodeAggregateSelection';
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type ClientNotificationHasNotificationAggregationSelection = {
  __typename?: 'ClientNotificationHasNotificationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientNotificationHasNotificationNodeAggregateSelection>;
};

export type ClientNotificationHasNotificationNodeAggregateSelection = {
  __typename?: 'ClientNotificationHasNotificationNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
};

export type ClientOnCreateInput = {
  sub_type?: InputMaybe<Scalars['String']['input']>;
};

export type ClientOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ClientSort objects to sort Clients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ClientSort>>;
};

export type ClientOrderedProjectAggregateInput = {
  AND?: InputMaybe<Array<ClientOrderedProjectAggregateInput>>;
  NOT?: InputMaybe<ClientOrderedProjectAggregateInput>;
  OR?: InputMaybe<Array<ClientOrderedProjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientOrderedProjectNodeAggregationWhereInput>;
};

export type ClientOrderedProjectConnectFieldInput = {
  connect?: InputMaybe<ProjectConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ClientOrderedProjectConnectOrCreateFieldInput = {
  onCreate: ClientOrderedProjectConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ClientOrderedProjectConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type ClientOrderedProjectConnection = {
  __typename?: 'ClientOrderedProjectConnection';
  edges: Array<ClientOrderedProjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientOrderedProjectConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type ClientOrderedProjectConnectionWhere = {
  AND?: InputMaybe<Array<ClientOrderedProjectConnectionWhere>>;
  NOT?: InputMaybe<ClientOrderedProjectConnectionWhere>;
  OR?: InputMaybe<Array<ClientOrderedProjectConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type ClientOrderedProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type ClientOrderedProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ClientOrderedProjectConnectionWhere>;
};

export type ClientOrderedProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ClientOrderedProjectConnectionWhere>;
};

export type ClientOrderedProjectFieldInput = {
  connect?: InputMaybe<ClientOrderedProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientOrderedProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientOrderedProjectCreateFieldInput>;
};

export type ClientOrderedProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientOrderedProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientOrderedProjectNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientOrderedProjectNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  country_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gst_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientOrderedProjectRelationship = {
  __typename?: 'ClientOrderedProjectRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ClientOrderedProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ClientOrderedProjectUpdateFieldInput = {
  connect?: InputMaybe<ClientOrderedProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientOrderedProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientOrderedProjectCreateFieldInput>;
  delete?: InputMaybe<ClientOrderedProjectDeleteFieldInput>;
  disconnect?: InputMaybe<ClientOrderedProjectDisconnectFieldInput>;
  update?: InputMaybe<ClientOrderedProjectUpdateConnectionInput>;
  where?: InputMaybe<ClientOrderedProjectConnectionWhere>;
};

export type ClientProjectOrderedProjectAggregationSelection = {
  __typename?: 'ClientProjectOrderedProjectAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientProjectOrderedProjectNodeAggregateSelection>;
};

export type ClientProjectOrderedProjectNodeAggregateSelection = {
  __typename?: 'ClientProjectOrderedProjectNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  country: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ClientRelationInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedCreateFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForCreateFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsCreateFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketCreateFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationCreateFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyCreateFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketCreateFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasCreateFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectCreateFieldInput>;
  userIs?: InputMaybe<ClientUserIsCreateFieldInput>;
};

export type ClientReplyHasReplyAggregationSelection = {
  __typename?: 'ClientReplyHasReplyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientReplyHasReplyNodeAggregateSelection>;
};

export type ClientReplyHasReplyNodeAggregateSelection = {
  __typename?: 'ClientReplyHasReplyNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  replyMessage: StringAggregateSelectionNullable;
  senderEmail: StringAggregateSelectionNullable;
};

/** Fields to sort Clients by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientSort object. */
export type ClientSort = {
  id?: InputMaybe<SortDirection>;
  sub_type?: InputMaybe<SortDirection>;
};

export type ClientSupportTicketHasSupportticketAggregationSelection = {
  __typename?: 'ClientSupportTicketHasSupportticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientSupportTicketHasSupportticketNodeAggregateSelection>;
};

export type ClientSupportTicketHasSupportticketNodeAggregateSelection = {
  __typename?: 'ClientSupportTicketHasSupportticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type ClientUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ClientUpdateInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedUpdateFieldInput>;
  communicationticketFor?: InputMaybe<ClientCommunicationticketForUpdateFieldInput>;
  hasLeads?: InputMaybe<ClientHasLeadsUpdateFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketUpdateFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationUpdateFieldInput>;
  hasReply?: InputMaybe<ClientHasReplyUpdateFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketUpdateFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasUpdateFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectUpdateFieldInput>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  userIs?: InputMaybe<ClientUserIsUpdateFieldInput>;
};

export type ClientUserIsAggregateInput = {
  AND?: InputMaybe<Array<ClientUserIsAggregateInput>>;
  NOT?: InputMaybe<ClientUserIsAggregateInput>;
  OR?: InputMaybe<Array<ClientUserIsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ClientUserIsNodeAggregationWhereInput>;
};

export type ClientUserIsConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ClientUserIsConnectOrCreateFieldInput = {
  onCreate: ClientUserIsConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ClientUserIsConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ClientUserIsConnection = {
  __typename?: 'ClientUserIsConnection';
  edges: Array<ClientUserIsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientUserIsConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type ClientUserIsConnectionWhere = {
  AND?: InputMaybe<Array<ClientUserIsConnectionWhere>>;
  NOT?: InputMaybe<ClientUserIsConnectionWhere>;
  OR?: InputMaybe<Array<ClientUserIsConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type ClientUserIsCreateFieldInput = {
  node: UserCreateInput;
};

export type ClientUserIsDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<ClientUserIsConnectionWhere>;
};

export type ClientUserIsDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<ClientUserIsConnectionWhere>;
};

export type ClientUserIsFieldInput = {
  connect?: InputMaybe<ClientUserIsConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientUserIsConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientUserIsCreateFieldInput>;
};

export type ClientUserIsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClientUserIsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ClientUserIsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ClientUserIsNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientUserIsRelationship = {
  __typename?: 'ClientUserIsRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type ClientUserIsUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ClientUserIsUpdateFieldInput = {
  connect?: InputMaybe<ClientUserIsConnectFieldInput>;
  connectOrCreate?: InputMaybe<ClientUserIsConnectOrCreateFieldInput>;
  create?: InputMaybe<ClientUserIsCreateFieldInput>;
  delete?: InputMaybe<ClientUserIsDeleteFieldInput>;
  disconnect?: InputMaybe<ClientUserIsDisconnectFieldInput>;
  update?: InputMaybe<ClientUserIsUpdateConnectionInput>;
  where?: InputMaybe<ClientUserIsConnectionWhere>;
};

export type ClientUserUserIsAggregationSelection = {
  __typename?: 'ClientUserUserIsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientUserUserIsNodeAggregateSelection>;
};

export type ClientUserUserIsNodeAggregateSelection = {
  __typename?: 'ClientUserUserIsNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type ClientWhere = {
  AND?: InputMaybe<Array<ClientWhere>>;
  NOT?: InputMaybe<ClientWhere>;
  OR?: InputMaybe<Array<ClientWhere>>;
  adminApproved?: InputMaybe<AdminWhere>;
  adminApprovedAggregate?: InputMaybe<ClientAdminApprovedAggregateInput>;
  adminApprovedConnection?: InputMaybe<ClientAdminApprovedConnectionWhere>;
  adminApprovedConnection_NOT?: InputMaybe<ClientAdminApprovedConnectionWhere>;
  adminApproved_NOT?: InputMaybe<AdminWhere>;
  communicationticketFor?: InputMaybe<CommunicationTicketWhere>;
  communicationticketForAggregate?: InputMaybe<ClientCommunicationticketForAggregateInput>;
  communicationticketForConnection?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
  communicationticketForConnection_NOT?: InputMaybe<ClientCommunicationticketForConnectionWhere>;
  communicationticketFor_NOT?: InputMaybe<CommunicationTicketWhere>;
  hasLeads?: InputMaybe<LeadsWhere>;
  hasLeadsAggregate?: InputMaybe<ClientHasLeadsAggregateInput>;
  hasLeadsConnection?: InputMaybe<ClientHasLeadsConnectionWhere>;
  hasLeadsConnection_NOT?: InputMaybe<ClientHasLeadsConnectionWhere>;
  hasLeads_NOT?: InputMaybe<LeadsWhere>;
  hasModuleticket?: InputMaybe<ModuleTicketWhere>;
  hasModuleticketAggregate?: InputMaybe<ClientHasModuleticketAggregateInput>;
  hasModuleticketConnection?: InputMaybe<ClientHasModuleticketConnectionWhere>;
  hasModuleticketConnection_NOT?: InputMaybe<ClientHasModuleticketConnectionWhere>;
  hasModuleticket_NOT?: InputMaybe<ModuleTicketWhere>;
  hasNotification?: InputMaybe<NotificationWhere>;
  hasNotificationAggregate?: InputMaybe<ClientHasNotificationAggregateInput>;
  hasNotificationConnection?: InputMaybe<ClientHasNotificationConnectionWhere>;
  hasNotificationConnection_NOT?: InputMaybe<ClientHasNotificationConnectionWhere>;
  hasNotification_NOT?: InputMaybe<NotificationWhere>;
  hasReply?: InputMaybe<ReplyWhere>;
  hasReplyAggregate?: InputMaybe<ClientHasReplyAggregateInput>;
  hasReplyConnection?: InputMaybe<ClientHasReplyConnectionWhere>;
  hasReplyConnection_NOT?: InputMaybe<ClientHasReplyConnectionWhere>;
  hasReply_NOT?: InputMaybe<ReplyWhere>;
  hasSupportticket?: InputMaybe<SupportTicketWhere>;
  hasSupportticketAggregate?: InputMaybe<ClientHasSupportticketAggregateInput>;
  hasSupportticketConnection?: InputMaybe<ClientHasSupportticketConnectionWhere>;
  hasSupportticketConnection_NOT?: InputMaybe<ClientHasSupportticketConnectionWhere>;
  hasSupportticket_NOT?: InputMaybe<SupportTicketWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  invoiceHas?: InputMaybe<InvoiceWhere>;
  invoiceHasAggregate?: InputMaybe<ClientInvoiceHasAggregateInput>;
  invoiceHasConnection?: InputMaybe<ClientInvoiceHasConnectionWhere>;
  invoiceHasConnection_NOT?: InputMaybe<ClientInvoiceHasConnectionWhere>;
  invoiceHas_NOT?: InputMaybe<InvoiceWhere>;
  orderedProject?: InputMaybe<ProjectWhere>;
  orderedProjectAggregate?: InputMaybe<ClientOrderedProjectAggregateInput>;
  orderedProjectConnection?: InputMaybe<ClientOrderedProjectConnectionWhere>;
  orderedProjectConnection_NOT?: InputMaybe<ClientOrderedProjectConnectionWhere>;
  orderedProject_NOT?: InputMaybe<ProjectWhere>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  sub_type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sub_type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sub_type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sub_type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  userIs?: InputMaybe<UserWhere>;
  userIsAggregate?: InputMaybe<ClientUserIsAggregateInput>;
  userIsConnection?: InputMaybe<ClientUserIsConnectionWhere>;
  userIsConnection_NOT?: InputMaybe<ClientUserIsConnectionWhere>;
  userIs_NOT?: InputMaybe<UserWhere>;
};

export type ClientsConnection = {
  __typename?: 'ClientsConnection';
  edges: Array<ClientEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommunicationTicket = {
  __typename?: 'CommunicationTicket';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<CommunicationTicketAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: CommunicationTicketAdminCreatedConnection;
  date?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<Scalars['String']['output']>;
  forClient: Array<Client>;
  forClientAggregate?: Maybe<CommunicationTicketClientForClientAggregationSelection>;
  forClientConnection: CommunicationTicketForClientConnection;
  forVendor: Array<Vendor>;
  forVendorAggregate?: Maybe<CommunicationTicketVendorForVendorAggregationSelection>;
  forVendorConnection: CommunicationTicketForVendorConnection;
  hasReply: Array<Reply>;
  hasReplyAggregate?: Maybe<CommunicationTicketReplyHasReplyAggregationSelection>;
  hasReplyConnection: CommunicationTicketHasReplyConnection;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  sub?: Maybe<Scalars['String']['output']>;
};


export type CommunicationTicketAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type CommunicationTicketAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type CommunicationTicketAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunicationTicketAdminCreatedConnectionSort>>;
  where?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
};


export type CommunicationTicketForClientArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type CommunicationTicketForClientAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type CommunicationTicketForClientConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunicationTicketForClientConnectionSort>>;
  where?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
};


export type CommunicationTicketForVendorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type CommunicationTicketForVendorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type CommunicationTicketForVendorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunicationTicketForVendorConnectionSort>>;
  where?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
};


export type CommunicationTicketHasReplyArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ReplyOptions>;
  where?: InputMaybe<ReplyWhere>;
};


export type CommunicationTicketHasReplyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReplyWhere>;
};


export type CommunicationTicketHasReplyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunicationTicketHasReplyConnectionSort>>;
  where?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
};

export type CommunicationTicketAdminAdminCreatedAggregationSelection = {
  __typename?: 'CommunicationTicketAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommunicationTicketAdminAdminCreatedNodeAggregateSelection>;
};

export type CommunicationTicketAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'CommunicationTicketAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type CommunicationTicketAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<CommunicationTicketAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<CommunicationTicketAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<CommunicationTicketAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommunicationTicketAdminCreatedNodeAggregationWhereInput>;
};

export type CommunicationTicketAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type CommunicationTicketAdminCreatedConnectOrCreateFieldInput = {
  onCreate: CommunicationTicketAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type CommunicationTicketAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type CommunicationTicketAdminCreatedConnection = {
  __typename?: 'CommunicationTicketAdminCreatedConnection';
  edges: Array<CommunicationTicketAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommunicationTicketAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type CommunicationTicketAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<CommunicationTicketAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<CommunicationTicketAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type CommunicationTicketAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type CommunicationTicketAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
};

export type CommunicationTicketAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
};

export type CommunicationTicketAdminCreatedFieldInput = {
  connect?: InputMaybe<CommunicationTicketAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<CommunicationTicketAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<CommunicationTicketAdminCreatedCreateFieldInput>;
};

export type CommunicationTicketAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommunicationTicketAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommunicationTicketAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommunicationTicketAdminCreatedNodeAggregationWhereInput>>;
};

export type CommunicationTicketAdminCreatedRelationship = {
  __typename?: 'CommunicationTicketAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type CommunicationTicketAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type CommunicationTicketAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<CommunicationTicketAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<CommunicationTicketAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<CommunicationTicketAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<CommunicationTicketAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<CommunicationTicketAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<CommunicationTicketAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
};

export type CommunicationTicketAggregateSelection = {
  __typename?: 'CommunicationTicketAggregateSelection';
  count: Scalars['Int']['output'];
  date: DateTimeAggregateSelectionNullable;
  files: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  message: StringAggregateSelectionNullable;
  sub: StringAggregateSelectionNullable;
};

export type CommunicationTicketClientForClientAggregationSelection = {
  __typename?: 'CommunicationTicketClientForClientAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommunicationTicketClientForClientNodeAggregateSelection>;
};

export type CommunicationTicketClientForClientNodeAggregateSelection = {
  __typename?: 'CommunicationTicketClientForClientNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type CommunicationTicketConnectInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedConnectFieldInput>;
  forClient?: InputMaybe<Array<CommunicationTicketForClientConnectFieldInput>>;
  forVendor?: InputMaybe<Array<CommunicationTicketForVendorConnectFieldInput>>;
  hasReply?: InputMaybe<Array<CommunicationTicketHasReplyConnectFieldInput>>;
};

export type CommunicationTicketConnectOrCreateInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedConnectOrCreateFieldInput>;
  forClient?: InputMaybe<Array<CommunicationTicketForClientConnectOrCreateFieldInput>>;
  forVendor?: InputMaybe<Array<CommunicationTicketForVendorConnectOrCreateFieldInput>>;
  hasReply?: InputMaybe<Array<CommunicationTicketHasReplyConnectOrCreateFieldInput>>;
};

export type CommunicationTicketConnectOrCreateWhere = {
  node: CommunicationTicketUniqueWhere;
};

export type CommunicationTicketConnectWhere = {
  node: CommunicationTicketWhere;
};

export type CommunicationTicketCreateInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedFieldInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  files?: InputMaybe<Scalars['String']['input']>;
  forClient?: InputMaybe<CommunicationTicketForClientFieldInput>;
  forVendor?: InputMaybe<CommunicationTicketForVendorFieldInput>;
  hasReply?: InputMaybe<CommunicationTicketHasReplyFieldInput>;
  message?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type CommunicationTicketDeleteInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedDeleteFieldInput>;
  forClient?: InputMaybe<Array<CommunicationTicketForClientDeleteFieldInput>>;
  forVendor?: InputMaybe<Array<CommunicationTicketForVendorDeleteFieldInput>>;
  hasReply?: InputMaybe<Array<CommunicationTicketHasReplyDeleteFieldInput>>;
};

export type CommunicationTicketDisconnectInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedDisconnectFieldInput>;
  forClient?: InputMaybe<Array<CommunicationTicketForClientDisconnectFieldInput>>;
  forVendor?: InputMaybe<Array<CommunicationTicketForVendorDisconnectFieldInput>>;
  hasReply?: InputMaybe<Array<CommunicationTicketHasReplyDisconnectFieldInput>>;
};

export type CommunicationTicketEdge = {
  __typename?: 'CommunicationTicketEdge';
  cursor: Scalars['String']['output'];
  node: CommunicationTicket;
};

export type CommunicationTicketForClientAggregateInput = {
  AND?: InputMaybe<Array<CommunicationTicketForClientAggregateInput>>;
  NOT?: InputMaybe<CommunicationTicketForClientAggregateInput>;
  OR?: InputMaybe<Array<CommunicationTicketForClientAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommunicationTicketForClientNodeAggregationWhereInput>;
};

export type CommunicationTicketForClientConnectFieldInput = {
  connect?: InputMaybe<Array<ClientConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type CommunicationTicketForClientConnectOrCreateFieldInput = {
  onCreate: CommunicationTicketForClientConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type CommunicationTicketForClientConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type CommunicationTicketForClientConnection = {
  __typename?: 'CommunicationTicketForClientConnection';
  edges: Array<CommunicationTicketForClientRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommunicationTicketForClientConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type CommunicationTicketForClientConnectionWhere = {
  AND?: InputMaybe<Array<CommunicationTicketForClientConnectionWhere>>;
  NOT?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
  OR?: InputMaybe<Array<CommunicationTicketForClientConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type CommunicationTicketForClientCreateFieldInput = {
  node: ClientCreateInput;
};

export type CommunicationTicketForClientDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
};

export type CommunicationTicketForClientDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
};

export type CommunicationTicketForClientFieldInput = {
  connect?: InputMaybe<Array<CommunicationTicketForClientConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommunicationTicketForClientConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommunicationTicketForClientCreateFieldInput>>;
};

export type CommunicationTicketForClientNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommunicationTicketForClientNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommunicationTicketForClientNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommunicationTicketForClientNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CommunicationTicketForClientRelationship = {
  __typename?: 'CommunicationTicketForClientRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type CommunicationTicketForClientUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type CommunicationTicketForClientUpdateFieldInput = {
  connect?: InputMaybe<Array<CommunicationTicketForClientConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommunicationTicketForClientConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommunicationTicketForClientCreateFieldInput>>;
  delete?: InputMaybe<Array<CommunicationTicketForClientDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CommunicationTicketForClientDisconnectFieldInput>>;
  update?: InputMaybe<CommunicationTicketForClientUpdateConnectionInput>;
  where?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
};

export type CommunicationTicketForVendorAggregateInput = {
  AND?: InputMaybe<Array<CommunicationTicketForVendorAggregateInput>>;
  NOT?: InputMaybe<CommunicationTicketForVendorAggregateInput>;
  OR?: InputMaybe<Array<CommunicationTicketForVendorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommunicationTicketForVendorNodeAggregationWhereInput>;
};

export type CommunicationTicketForVendorConnectFieldInput = {
  connect?: InputMaybe<Array<VendorConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type CommunicationTicketForVendorConnectOrCreateFieldInput = {
  onCreate: CommunicationTicketForVendorConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type CommunicationTicketForVendorConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type CommunicationTicketForVendorConnection = {
  __typename?: 'CommunicationTicketForVendorConnection';
  edges: Array<CommunicationTicketForVendorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommunicationTicketForVendorConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type CommunicationTicketForVendorConnectionWhere = {
  AND?: InputMaybe<Array<CommunicationTicketForVendorConnectionWhere>>;
  NOT?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
  OR?: InputMaybe<Array<CommunicationTicketForVendorConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type CommunicationTicketForVendorCreateFieldInput = {
  node: VendorCreateInput;
};

export type CommunicationTicketForVendorDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
};

export type CommunicationTicketForVendorDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
};

export type CommunicationTicketForVendorFieldInput = {
  connect?: InputMaybe<Array<CommunicationTicketForVendorConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommunicationTicketForVendorConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommunicationTicketForVendorCreateFieldInput>>;
};

export type CommunicationTicketForVendorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommunicationTicketForVendorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommunicationTicketForVendorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommunicationTicketForVendorNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CommunicationTicketForVendorRelationship = {
  __typename?: 'CommunicationTicketForVendorRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type CommunicationTicketForVendorUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type CommunicationTicketForVendorUpdateFieldInput = {
  connect?: InputMaybe<Array<CommunicationTicketForVendorConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommunicationTicketForVendorConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommunicationTicketForVendorCreateFieldInput>>;
  delete?: InputMaybe<Array<CommunicationTicketForVendorDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CommunicationTicketForVendorDisconnectFieldInput>>;
  update?: InputMaybe<CommunicationTicketForVendorUpdateConnectionInput>;
  where?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
};

export type CommunicationTicketHasReplyAggregateInput = {
  AND?: InputMaybe<Array<CommunicationTicketHasReplyAggregateInput>>;
  NOT?: InputMaybe<CommunicationTicketHasReplyAggregateInput>;
  OR?: InputMaybe<Array<CommunicationTicketHasReplyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommunicationTicketHasReplyNodeAggregationWhereInput>;
};

export type CommunicationTicketHasReplyConnectFieldInput = {
  connect?: InputMaybe<Array<ReplyConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ReplyConnectWhere>;
};

export type CommunicationTicketHasReplyConnectOrCreateFieldInput = {
  onCreate: CommunicationTicketHasReplyConnectOrCreateFieldInputOnCreate;
  where: ReplyConnectOrCreateWhere;
};

export type CommunicationTicketHasReplyConnectOrCreateFieldInputOnCreate = {
  node: ReplyOnCreateInput;
};

export type CommunicationTicketHasReplyConnection = {
  __typename?: 'CommunicationTicketHasReplyConnection';
  edges: Array<CommunicationTicketHasReplyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommunicationTicketHasReplyConnectionSort = {
  node?: InputMaybe<ReplySort>;
};

export type CommunicationTicketHasReplyConnectionWhere = {
  AND?: InputMaybe<Array<CommunicationTicketHasReplyConnectionWhere>>;
  NOT?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
  OR?: InputMaybe<Array<CommunicationTicketHasReplyConnectionWhere>>;
  node?: InputMaybe<ReplyWhere>;
};

export type CommunicationTicketHasReplyCreateFieldInput = {
  node: ReplyCreateInput;
};

export type CommunicationTicketHasReplyDeleteFieldInput = {
  delete?: InputMaybe<ReplyDeleteInput>;
  where?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
};

export type CommunicationTicketHasReplyDisconnectFieldInput = {
  disconnect?: InputMaybe<ReplyDisconnectInput>;
  where?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
};

export type CommunicationTicketHasReplyFieldInput = {
  connect?: InputMaybe<Array<CommunicationTicketHasReplyConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommunicationTicketHasReplyConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommunicationTicketHasReplyCreateFieldInput>>;
};

export type CommunicationTicketHasReplyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommunicationTicketHasReplyNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommunicationTicketHasReplyNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommunicationTicketHasReplyNodeAggregationWhereInput>>;
  replyMessage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CommunicationTicketHasReplyRelationship = {
  __typename?: 'CommunicationTicketHasReplyRelationship';
  cursor: Scalars['String']['output'];
  node: Reply;
};

export type CommunicationTicketHasReplyUpdateConnectionInput = {
  node?: InputMaybe<ReplyUpdateInput>;
};

export type CommunicationTicketHasReplyUpdateFieldInput = {
  connect?: InputMaybe<Array<CommunicationTicketHasReplyConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommunicationTicketHasReplyConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommunicationTicketHasReplyCreateFieldInput>>;
  delete?: InputMaybe<Array<CommunicationTicketHasReplyDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CommunicationTicketHasReplyDisconnectFieldInput>>;
  update?: InputMaybe<CommunicationTicketHasReplyUpdateConnectionInput>;
  where?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
};

export type CommunicationTicketOnCreateInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  files?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type CommunicationTicketOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CommunicationTicketSort objects to sort CommunicationTickets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CommunicationTicketSort>>;
};

export type CommunicationTicketRelationInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedCreateFieldInput>;
  forClient?: InputMaybe<Array<CommunicationTicketForClientCreateFieldInput>>;
  forVendor?: InputMaybe<Array<CommunicationTicketForVendorCreateFieldInput>>;
  hasReply?: InputMaybe<Array<CommunicationTicketHasReplyCreateFieldInput>>;
};

export type CommunicationTicketReplyHasReplyAggregationSelection = {
  __typename?: 'CommunicationTicketReplyHasReplyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommunicationTicketReplyHasReplyNodeAggregateSelection>;
};

export type CommunicationTicketReplyHasReplyNodeAggregateSelection = {
  __typename?: 'CommunicationTicketReplyHasReplyNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  replyMessage: StringAggregateSelectionNullable;
  senderEmail: StringAggregateSelectionNullable;
};

/** Fields to sort CommunicationTickets by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommunicationTicketSort object. */
export type CommunicationTicketSort = {
  date?: InputMaybe<SortDirection>;
  files?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  sub?: InputMaybe<SortDirection>;
};

export type CommunicationTicketUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommunicationTicketUpdateInput = {
  adminCreated?: InputMaybe<CommunicationTicketAdminCreatedUpdateFieldInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  files?: InputMaybe<Scalars['String']['input']>;
  forClient?: InputMaybe<Array<CommunicationTicketForClientUpdateFieldInput>>;
  forVendor?: InputMaybe<Array<CommunicationTicketForVendorUpdateFieldInput>>;
  hasReply?: InputMaybe<Array<CommunicationTicketHasReplyUpdateFieldInput>>;
  message?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type CommunicationTicketVendorForVendorAggregationSelection = {
  __typename?: 'CommunicationTicketVendorForVendorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommunicationTicketVendorForVendorNodeAggregateSelection>;
};

export type CommunicationTicketVendorForVendorNodeAggregateSelection = {
  __typename?: 'CommunicationTicketVendorForVendorNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type CommunicationTicketWhere = {
  AND?: InputMaybe<Array<CommunicationTicketWhere>>;
  NOT?: InputMaybe<CommunicationTicketWhere>;
  OR?: InputMaybe<Array<CommunicationTicketWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<CommunicationTicketAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<CommunicationTicketAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  files?: InputMaybe<Scalars['String']['input']>;
  files_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  files_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  files_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  files_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  forClientAggregate?: InputMaybe<CommunicationTicketForClientAggregateInput>;
  /** Return CommunicationTickets where all of the related CommunicationTicketForClientConnections match this filter */
  forClientConnection_ALL?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
  /** Return CommunicationTickets where none of the related CommunicationTicketForClientConnections match this filter */
  forClientConnection_NONE?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
  /** Return CommunicationTickets where one of the related CommunicationTicketForClientConnections match this filter */
  forClientConnection_SINGLE?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
  /** Return CommunicationTickets where some of the related CommunicationTicketForClientConnections match this filter */
  forClientConnection_SOME?: InputMaybe<CommunicationTicketForClientConnectionWhere>;
  /** Return CommunicationTickets where all of the related Clients match this filter */
  forClient_ALL?: InputMaybe<ClientWhere>;
  /** Return CommunicationTickets where none of the related Clients match this filter */
  forClient_NONE?: InputMaybe<ClientWhere>;
  /** Return CommunicationTickets where one of the related Clients match this filter */
  forClient_SINGLE?: InputMaybe<ClientWhere>;
  /** Return CommunicationTickets where some of the related Clients match this filter */
  forClient_SOME?: InputMaybe<ClientWhere>;
  forVendorAggregate?: InputMaybe<CommunicationTicketForVendorAggregateInput>;
  /** Return CommunicationTickets where all of the related CommunicationTicketForVendorConnections match this filter */
  forVendorConnection_ALL?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
  /** Return CommunicationTickets where none of the related CommunicationTicketForVendorConnections match this filter */
  forVendorConnection_NONE?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
  /** Return CommunicationTickets where one of the related CommunicationTicketForVendorConnections match this filter */
  forVendorConnection_SINGLE?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
  /** Return CommunicationTickets where some of the related CommunicationTicketForVendorConnections match this filter */
  forVendorConnection_SOME?: InputMaybe<CommunicationTicketForVendorConnectionWhere>;
  /** Return CommunicationTickets where all of the related Vendors match this filter */
  forVendor_ALL?: InputMaybe<VendorWhere>;
  /** Return CommunicationTickets where none of the related Vendors match this filter */
  forVendor_NONE?: InputMaybe<VendorWhere>;
  /** Return CommunicationTickets where one of the related Vendors match this filter */
  forVendor_SINGLE?: InputMaybe<VendorWhere>;
  /** Return CommunicationTickets where some of the related Vendors match this filter */
  forVendor_SOME?: InputMaybe<VendorWhere>;
  hasReplyAggregate?: InputMaybe<CommunicationTicketHasReplyAggregateInput>;
  /** Return CommunicationTickets where all of the related CommunicationTicketHasReplyConnections match this filter */
  hasReplyConnection_ALL?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
  /** Return CommunicationTickets where none of the related CommunicationTicketHasReplyConnections match this filter */
  hasReplyConnection_NONE?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
  /** Return CommunicationTickets where one of the related CommunicationTicketHasReplyConnections match this filter */
  hasReplyConnection_SINGLE?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
  /** Return CommunicationTickets where some of the related CommunicationTicketHasReplyConnections match this filter */
  hasReplyConnection_SOME?: InputMaybe<CommunicationTicketHasReplyConnectionWhere>;
  /** Return CommunicationTickets where all of the related Replies match this filter */
  hasReply_ALL?: InputMaybe<ReplyWhere>;
  /** Return CommunicationTickets where none of the related Replies match this filter */
  hasReply_NONE?: InputMaybe<ReplyWhere>;
  /** Return CommunicationTickets where one of the related Replies match this filter */
  hasReply_SINGLE?: InputMaybe<ReplyWhere>;
  /** Return CommunicationTickets where some of the related Replies match this filter */
  hasReply_SOME?: InputMaybe<ReplyWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
  sub_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sub_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sub_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sub_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type CommunicationTicketsConnection = {
  __typename?: 'CommunicationTicketsConnection';
  edges: Array<CommunicationTicketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Counter = {
  __typename?: 'Counter';
  invoiceCount?: Maybe<Scalars['Int']['output']>;
  moduleCount?: Maybe<Scalars['Int']['output']>;
  projectCount?: Maybe<Scalars['Int']['output']>;
};

export type CounterAggregateSelection = {
  __typename?: 'CounterAggregateSelection';
  count: Scalars['Int']['output'];
  invoiceCount: IntAggregateSelectionNullable;
  moduleCount: IntAggregateSelectionNullable;
  projectCount: IntAggregateSelectionNullable;
};

export type CounterCreateInput = {
  invoiceCount?: InputMaybe<Scalars['Int']['input']>;
  moduleCount?: InputMaybe<Scalars['Int']['input']>;
  projectCount?: InputMaybe<Scalars['Int']['input']>;
};

export type CounterEdge = {
  __typename?: 'CounterEdge';
  cursor: Scalars['String']['output'];
  node: Counter;
};

export type CounterOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CounterSort objects to sort Counters by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CounterSort>>;
};

/** Fields to sort Counters by. The order in which sorts are applied is not guaranteed when specifying many fields in one CounterSort object. */
export type CounterSort = {
  invoiceCount?: InputMaybe<SortDirection>;
  moduleCount?: InputMaybe<SortDirection>;
  projectCount?: InputMaybe<SortDirection>;
};

export type CounterUpdateInput = {
  invoiceCount?: InputMaybe<Scalars['Int']['input']>;
  invoiceCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  invoiceCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  moduleCount?: InputMaybe<Scalars['Int']['input']>;
  moduleCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  moduleCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  projectCount?: InputMaybe<Scalars['Int']['input']>;
  projectCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  projectCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type CounterWhere = {
  AND?: InputMaybe<Array<CounterWhere>>;
  NOT?: InputMaybe<CounterWhere>;
  OR?: InputMaybe<Array<CounterWhere>>;
  invoiceCount?: InputMaybe<Scalars['Int']['input']>;
  invoiceCount_GT?: InputMaybe<Scalars['Int']['input']>;
  invoiceCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  invoiceCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  invoiceCount_LT?: InputMaybe<Scalars['Int']['input']>;
  invoiceCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduleCount?: InputMaybe<Scalars['Int']['input']>;
  moduleCount_GT?: InputMaybe<Scalars['Int']['input']>;
  moduleCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduleCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  moduleCount_LT?: InputMaybe<Scalars['Int']['input']>;
  moduleCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  projectCount?: InputMaybe<Scalars['Int']['input']>;
  projectCount_GT?: InputMaybe<Scalars['Int']['input']>;
  projectCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectCount_LT?: InputMaybe<Scalars['Int']['input']>;
  projectCount_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CountersConnection = {
  __typename?: 'CountersConnection';
  edges: Array<CounterEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateAdminsMutationResponse = {
  __typename?: 'CreateAdminsMutationResponse';
  admins: Array<Admin>;
  info: CreateInfo;
};

export type CreateClientsMutationResponse = {
  __typename?: 'CreateClientsMutationResponse';
  clients: Array<Client>;
  info: CreateInfo;
};

export type CreateCommunicationTicketsMutationResponse = {
  __typename?: 'CreateCommunicationTicketsMutationResponse';
  communicationTickets: Array<CommunicationTicket>;
  info: CreateInfo;
};

export type CreateCountersMutationResponse = {
  __typename?: 'CreateCountersMutationResponse';
  counters: Array<Counter>;
  info: CreateInfo;
};

export type CreateDocumentsMutationResponse = {
  __typename?: 'CreateDocumentsMutationResponse';
  documents: Array<Documents>;
  info: CreateInfo;
};

export type CreateEmployeesMutationResponse = {
  __typename?: 'CreateEmployeesMutationResponse';
  employees: Array<Employee>;
  info: CreateInfo;
};

export type CreateFilesMutationResponse = {
  __typename?: 'CreateFilesMutationResponse';
  files: Array<Files>;
  info: CreateInfo;
};

export type CreateImagesMutationResponse = {
  __typename?: 'CreateImagesMutationResponse';
  images: Array<Images>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateInvoicesMutationResponse = {
  __typename?: 'CreateInvoicesMutationResponse';
  info: CreateInfo;
  invoices: Array<Invoice>;
};

export type CreateLeadsMutationResponse = {
  __typename?: 'CreateLeadsMutationResponse';
  info: CreateInfo;
  leads: Array<Leads>;
};

export type CreateManagementsMutationResponse = {
  __typename?: 'CreateManagementsMutationResponse';
  info: CreateInfo;
  managements: Array<Management>;
};

export type CreateModuleTicketsMutationResponse = {
  __typename?: 'CreateModuleTicketsMutationResponse';
  info: CreateInfo;
  moduleTickets: Array<ModuleTicket>;
};

export type CreateModulesMutationResponse = {
  __typename?: 'CreateModulesMutationResponse';
  info: CreateInfo;
  modules: Array<Module>;
};

export type CreateNotificationsMutationResponse = {
  __typename?: 'CreateNotificationsMutationResponse';
  info: CreateInfo;
  notifications: Array<Notification>;
};

export type CreatePagesMutationResponse = {
  __typename?: 'CreatePagesMutationResponse';
  info: CreateInfo;
  pages: Array<Page>;
};

export type CreateProjectTicketsMutationResponse = {
  __typename?: 'CreateProjectTicketsMutationResponse';
  info: CreateInfo;
  projectTickets: Array<ProjectTicket>;
};

export type CreateProjectsMutationResponse = {
  __typename?: 'CreateProjectsMutationResponse';
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateRepliesMutationResponse = {
  __typename?: 'CreateRepliesMutationResponse';
  info: CreateInfo;
  replies: Array<Reply>;
};

export type CreateRolesMutationResponse = {
  __typename?: 'CreateRolesMutationResponse';
  info: CreateInfo;
  roles: Array<Role>;
};

export type CreateServicesMutationResponse = {
  __typename?: 'CreateServicesMutationResponse';
  info: CreateInfo;
  services: Array<Service>;
};

export type CreateSupportTicketsMutationResponse = {
  __typename?: 'CreateSupportTicketsMutationResponse';
  info: CreateInfo;
  supportTickets: Array<SupportTicket>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type CreateVendorsMutationResponse = {
  __typename?: 'CreateVendorsMutationResponse';
  info: CreateInfo;
  vendors: Array<Vendor>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Documents = {
  __typename?: 'Documents';
  hasFiles?: Maybe<Files>;
  hasFilesAggregate?: Maybe<DocumentsFilesHasFilesAggregationSelection>;
  hasFilesConnection: DocumentsHasFilesConnection;
  hasImages?: Maybe<Images>;
  hasImagesAggregate?: Maybe<DocumentsImagesHasImagesAggregationSelection>;
  hasImagesConnection: DocumentsHasImagesConnection;
  id?: Maybe<Scalars['String']['output']>;
  moduleHas?: Maybe<Module>;
  moduleHasAggregate?: Maybe<DocumentsModuleModuleHasAggregationSelection>;
  moduleHasConnection: DocumentsModuleHasConnection;
  userHas?: Maybe<User>;
  userHasAggregate?: Maybe<DocumentsUserUserHasAggregationSelection>;
  userHasConnection: DocumentsUserHasConnection;
};


export type DocumentsHasFilesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FilesOptions>;
  where?: InputMaybe<FilesWhere>;
};


export type DocumentsHasFilesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FilesWhere>;
};


export type DocumentsHasFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentsHasFilesConnectionSort>>;
  where?: InputMaybe<DocumentsHasFilesConnectionWhere>;
};


export type DocumentsHasImagesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ImagesOptions>;
  where?: InputMaybe<ImagesWhere>;
};


export type DocumentsHasImagesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImagesWhere>;
};


export type DocumentsHasImagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentsHasImagesConnectionSort>>;
  where?: InputMaybe<DocumentsHasImagesConnectionWhere>;
};


export type DocumentsModuleHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleOptions>;
  where?: InputMaybe<ModuleWhere>;
};


export type DocumentsModuleHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleWhere>;
};


export type DocumentsModuleHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentsModuleHasConnectionSort>>;
  where?: InputMaybe<DocumentsModuleHasConnectionWhere>;
};


export type DocumentsUserHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type DocumentsUserHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type DocumentsUserHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentsUserHasConnectionSort>>;
  where?: InputMaybe<DocumentsUserHasConnectionWhere>;
};

export type DocumentsAggregateSelection = {
  __typename?: 'DocumentsAggregateSelection';
  count: Scalars['Int']['output'];
  id: StringAggregateSelectionNullable;
};

export type DocumentsConnectInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesConnectFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesConnectFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasConnectFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasConnectFieldInput>;
};

export type DocumentsConnectOrCreateInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesConnectOrCreateFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesConnectOrCreateFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasConnectOrCreateFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasConnectOrCreateFieldInput>;
};

export type DocumentsConnectWhere = {
  node: DocumentsWhere;
};

export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  edges: Array<DocumentsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DocumentsCreateInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesFieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  moduleHas?: InputMaybe<DocumentsModuleHasFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasFieldInput>;
};

export type DocumentsDeleteInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesDeleteFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesDeleteFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasDeleteFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasDeleteFieldInput>;
};

export type DocumentsDisconnectInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesDisconnectFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesDisconnectFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasDisconnectFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasDisconnectFieldInput>;
};

export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  cursor: Scalars['String']['output'];
  node: Documents;
};

export type DocumentsFilesHasFilesAggregationSelection = {
  __typename?: 'DocumentsFilesHasFilesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DocumentsFilesHasFilesNodeAggregateSelection>;
};

export type DocumentsFilesHasFilesNodeAggregateSelection = {
  __typename?: 'DocumentsFilesHasFilesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type DocumentsHasFilesAggregateInput = {
  AND?: InputMaybe<Array<DocumentsHasFilesAggregateInput>>;
  NOT?: InputMaybe<DocumentsHasFilesAggregateInput>;
  OR?: InputMaybe<Array<DocumentsHasFilesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DocumentsHasFilesNodeAggregationWhereInput>;
};

export type DocumentsHasFilesConnectFieldInput = {
  connect?: InputMaybe<FilesConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FilesConnectWhere>;
};

export type DocumentsHasFilesConnectOrCreateFieldInput = {
  onCreate: DocumentsHasFilesConnectOrCreateFieldInputOnCreate;
  where: FilesConnectOrCreateWhere;
};

export type DocumentsHasFilesConnectOrCreateFieldInputOnCreate = {
  node: FilesOnCreateInput;
};

export type DocumentsHasFilesConnection = {
  __typename?: 'DocumentsHasFilesConnection';
  edges: Array<DocumentsHasFilesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DocumentsHasFilesConnectionSort = {
  node?: InputMaybe<FilesSort>;
};

export type DocumentsHasFilesConnectionWhere = {
  AND?: InputMaybe<Array<DocumentsHasFilesConnectionWhere>>;
  NOT?: InputMaybe<DocumentsHasFilesConnectionWhere>;
  OR?: InputMaybe<Array<DocumentsHasFilesConnectionWhere>>;
  node?: InputMaybe<FilesWhere>;
};

export type DocumentsHasFilesCreateFieldInput = {
  node: FilesCreateInput;
};

export type DocumentsHasFilesDeleteFieldInput = {
  delete?: InputMaybe<FilesDeleteInput>;
  where?: InputMaybe<DocumentsHasFilesConnectionWhere>;
};

export type DocumentsHasFilesDisconnectFieldInput = {
  disconnect?: InputMaybe<FilesDisconnectInput>;
  where?: InputMaybe<DocumentsHasFilesConnectionWhere>;
};

export type DocumentsHasFilesFieldInput = {
  connect?: InputMaybe<DocumentsHasFilesConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsHasFilesConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsHasFilesCreateFieldInput>;
};

export type DocumentsHasFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DocumentsHasFilesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DocumentsHasFilesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DocumentsHasFilesNodeAggregationWhereInput>>;
};

export type DocumentsHasFilesRelationship = {
  __typename?: 'DocumentsHasFilesRelationship';
  cursor: Scalars['String']['output'];
  node: Files;
};

export type DocumentsHasFilesUpdateConnectionInput = {
  node?: InputMaybe<FilesUpdateInput>;
};

export type DocumentsHasFilesUpdateFieldInput = {
  connect?: InputMaybe<DocumentsHasFilesConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsHasFilesConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsHasFilesCreateFieldInput>;
  delete?: InputMaybe<DocumentsHasFilesDeleteFieldInput>;
  disconnect?: InputMaybe<DocumentsHasFilesDisconnectFieldInput>;
  update?: InputMaybe<DocumentsHasFilesUpdateConnectionInput>;
  where?: InputMaybe<DocumentsHasFilesConnectionWhere>;
};

export type DocumentsHasImagesAggregateInput = {
  AND?: InputMaybe<Array<DocumentsHasImagesAggregateInput>>;
  NOT?: InputMaybe<DocumentsHasImagesAggregateInput>;
  OR?: InputMaybe<Array<DocumentsHasImagesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DocumentsHasImagesNodeAggregationWhereInput>;
};

export type DocumentsHasImagesConnectFieldInput = {
  connect?: InputMaybe<ImagesConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ImagesConnectWhere>;
};

export type DocumentsHasImagesConnectOrCreateFieldInput = {
  onCreate: DocumentsHasImagesConnectOrCreateFieldInputOnCreate;
  where: ImagesConnectOrCreateWhere;
};

export type DocumentsHasImagesConnectOrCreateFieldInputOnCreate = {
  node: ImagesOnCreateInput;
};

export type DocumentsHasImagesConnection = {
  __typename?: 'DocumentsHasImagesConnection';
  edges: Array<DocumentsHasImagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DocumentsHasImagesConnectionSort = {
  node?: InputMaybe<ImagesSort>;
};

export type DocumentsHasImagesConnectionWhere = {
  AND?: InputMaybe<Array<DocumentsHasImagesConnectionWhere>>;
  NOT?: InputMaybe<DocumentsHasImagesConnectionWhere>;
  OR?: InputMaybe<Array<DocumentsHasImagesConnectionWhere>>;
  node?: InputMaybe<ImagesWhere>;
};

export type DocumentsHasImagesCreateFieldInput = {
  node: ImagesCreateInput;
};

export type DocumentsHasImagesDeleteFieldInput = {
  delete?: InputMaybe<ImagesDeleteInput>;
  where?: InputMaybe<DocumentsHasImagesConnectionWhere>;
};

export type DocumentsHasImagesDisconnectFieldInput = {
  disconnect?: InputMaybe<ImagesDisconnectInput>;
  where?: InputMaybe<DocumentsHasImagesConnectionWhere>;
};

export type DocumentsHasImagesFieldInput = {
  connect?: InputMaybe<DocumentsHasImagesConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsHasImagesConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsHasImagesCreateFieldInput>;
};

export type DocumentsHasImagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DocumentsHasImagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DocumentsHasImagesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DocumentsHasImagesNodeAggregationWhereInput>>;
};

export type DocumentsHasImagesRelationship = {
  __typename?: 'DocumentsHasImagesRelationship';
  cursor: Scalars['String']['output'];
  node: Images;
};

export type DocumentsHasImagesUpdateConnectionInput = {
  node?: InputMaybe<ImagesUpdateInput>;
};

export type DocumentsHasImagesUpdateFieldInput = {
  connect?: InputMaybe<DocumentsHasImagesConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsHasImagesConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsHasImagesCreateFieldInput>;
  delete?: InputMaybe<DocumentsHasImagesDeleteFieldInput>;
  disconnect?: InputMaybe<DocumentsHasImagesDisconnectFieldInput>;
  update?: InputMaybe<DocumentsHasImagesUpdateConnectionInput>;
  where?: InputMaybe<DocumentsHasImagesConnectionWhere>;
};

export type DocumentsImagesHasImagesAggregationSelection = {
  __typename?: 'DocumentsImagesHasImagesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DocumentsImagesHasImagesNodeAggregateSelection>;
};

export type DocumentsImagesHasImagesNodeAggregateSelection = {
  __typename?: 'DocumentsImagesHasImagesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type DocumentsModuleHasAggregateInput = {
  AND?: InputMaybe<Array<DocumentsModuleHasAggregateInput>>;
  NOT?: InputMaybe<DocumentsModuleHasAggregateInput>;
  OR?: InputMaybe<Array<DocumentsModuleHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DocumentsModuleHasNodeAggregationWhereInput>;
};

export type DocumentsModuleHasConnectFieldInput = {
  connect?: InputMaybe<ModuleConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleConnectWhere>;
};

export type DocumentsModuleHasConnectOrCreateFieldInput = {
  onCreate: DocumentsModuleHasConnectOrCreateFieldInputOnCreate;
  where: ModuleConnectOrCreateWhere;
};

export type DocumentsModuleHasConnectOrCreateFieldInputOnCreate = {
  node: ModuleOnCreateInput;
};

export type DocumentsModuleHasConnection = {
  __typename?: 'DocumentsModuleHasConnection';
  edges: Array<DocumentsModuleHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DocumentsModuleHasConnectionSort = {
  node?: InputMaybe<ModuleSort>;
};

export type DocumentsModuleHasConnectionWhere = {
  AND?: InputMaybe<Array<DocumentsModuleHasConnectionWhere>>;
  NOT?: InputMaybe<DocumentsModuleHasConnectionWhere>;
  OR?: InputMaybe<Array<DocumentsModuleHasConnectionWhere>>;
  node?: InputMaybe<ModuleWhere>;
};

export type DocumentsModuleHasCreateFieldInput = {
  node: ModuleCreateInput;
};

export type DocumentsModuleHasDeleteFieldInput = {
  delete?: InputMaybe<ModuleDeleteInput>;
  where?: InputMaybe<DocumentsModuleHasConnectionWhere>;
};

export type DocumentsModuleHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleDisconnectInput>;
  where?: InputMaybe<DocumentsModuleHasConnectionWhere>;
};

export type DocumentsModuleHasFieldInput = {
  connect?: InputMaybe<DocumentsModuleHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsModuleHasConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsModuleHasCreateFieldInput>;
};

export type DocumentsModuleHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DocumentsModuleHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DocumentsModuleHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DocumentsModuleHasNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentsModuleHasRelationship = {
  __typename?: 'DocumentsModuleHasRelationship';
  cursor: Scalars['String']['output'];
  node: Module;
};

export type DocumentsModuleHasUpdateConnectionInput = {
  node?: InputMaybe<ModuleUpdateInput>;
};

export type DocumentsModuleHasUpdateFieldInput = {
  connect?: InputMaybe<DocumentsModuleHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsModuleHasConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsModuleHasCreateFieldInput>;
  delete?: InputMaybe<DocumentsModuleHasDeleteFieldInput>;
  disconnect?: InputMaybe<DocumentsModuleHasDisconnectFieldInput>;
  update?: InputMaybe<DocumentsModuleHasUpdateConnectionInput>;
  where?: InputMaybe<DocumentsModuleHasConnectionWhere>;
};

export type DocumentsModuleModuleHasAggregationSelection = {
  __typename?: 'DocumentsModuleModuleHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DocumentsModuleModuleHasNodeAggregateSelection>;
};

export type DocumentsModuleModuleHasNodeAggregateSelection = {
  __typename?: 'DocumentsModuleModuleHasNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type DocumentsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DocumentsSort objects to sort Documents by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DocumentsSort>>;
};

export type DocumentsRelationInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesCreateFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesCreateFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasCreateFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasCreateFieldInput>;
};

/** Fields to sort Documents by. The order in which sorts are applied is not guaranteed when specifying many fields in one DocumentsSort object. */
export type DocumentsSort = {
  id?: InputMaybe<SortDirection>;
};

export type DocumentsUpdateInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesUpdateFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesUpdateFieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  moduleHas?: InputMaybe<DocumentsModuleHasUpdateFieldInput>;
  userHas?: InputMaybe<DocumentsUserHasUpdateFieldInput>;
};

export type DocumentsUserHasAggregateInput = {
  AND?: InputMaybe<Array<DocumentsUserHasAggregateInput>>;
  NOT?: InputMaybe<DocumentsUserHasAggregateInput>;
  OR?: InputMaybe<Array<DocumentsUserHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DocumentsUserHasNodeAggregationWhereInput>;
};

export type DocumentsUserHasConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type DocumentsUserHasConnectOrCreateFieldInput = {
  onCreate: DocumentsUserHasConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type DocumentsUserHasConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type DocumentsUserHasConnection = {
  __typename?: 'DocumentsUserHasConnection';
  edges: Array<DocumentsUserHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DocumentsUserHasConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type DocumentsUserHasConnectionWhere = {
  AND?: InputMaybe<Array<DocumentsUserHasConnectionWhere>>;
  NOT?: InputMaybe<DocumentsUserHasConnectionWhere>;
  OR?: InputMaybe<Array<DocumentsUserHasConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type DocumentsUserHasCreateFieldInput = {
  node: UserCreateInput;
};

export type DocumentsUserHasDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<DocumentsUserHasConnectionWhere>;
};

export type DocumentsUserHasDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<DocumentsUserHasConnectionWhere>;
};

export type DocumentsUserHasFieldInput = {
  connect?: InputMaybe<DocumentsUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsUserHasCreateFieldInput>;
};

export type DocumentsUserHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DocumentsUserHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DocumentsUserHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DocumentsUserHasNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentsUserHasRelationship = {
  __typename?: 'DocumentsUserHasRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type DocumentsUserHasUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type DocumentsUserHasUpdateFieldInput = {
  connect?: InputMaybe<DocumentsUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<DocumentsUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<DocumentsUserHasCreateFieldInput>;
  delete?: InputMaybe<DocumentsUserHasDeleteFieldInput>;
  disconnect?: InputMaybe<DocumentsUserHasDisconnectFieldInput>;
  update?: InputMaybe<DocumentsUserHasUpdateConnectionInput>;
  where?: InputMaybe<DocumentsUserHasConnectionWhere>;
};

export type DocumentsUserUserHasAggregationSelection = {
  __typename?: 'DocumentsUserUserHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DocumentsUserUserHasNodeAggregateSelection>;
};

export type DocumentsUserUserHasNodeAggregateSelection = {
  __typename?: 'DocumentsUserUserHasNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type DocumentsWhere = {
  AND?: InputMaybe<Array<DocumentsWhere>>;
  NOT?: InputMaybe<DocumentsWhere>;
  OR?: InputMaybe<Array<DocumentsWhere>>;
  hasFiles?: InputMaybe<FilesWhere>;
  hasFilesAggregate?: InputMaybe<DocumentsHasFilesAggregateInput>;
  hasFilesConnection?: InputMaybe<DocumentsHasFilesConnectionWhere>;
  hasFilesConnection_NOT?: InputMaybe<DocumentsHasFilesConnectionWhere>;
  hasFiles_NOT?: InputMaybe<FilesWhere>;
  hasImages?: InputMaybe<ImagesWhere>;
  hasImagesAggregate?: InputMaybe<DocumentsHasImagesAggregateInput>;
  hasImagesConnection?: InputMaybe<DocumentsHasImagesConnectionWhere>;
  hasImagesConnection_NOT?: InputMaybe<DocumentsHasImagesConnectionWhere>;
  hasImages_NOT?: InputMaybe<ImagesWhere>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  moduleHas?: InputMaybe<ModuleWhere>;
  moduleHasAggregate?: InputMaybe<DocumentsModuleHasAggregateInput>;
  moduleHasConnection?: InputMaybe<DocumentsModuleHasConnectionWhere>;
  moduleHasConnection_NOT?: InputMaybe<DocumentsModuleHasConnectionWhere>;
  moduleHas_NOT?: InputMaybe<ModuleWhere>;
  userHas?: InputMaybe<UserWhere>;
  userHasAggregate?: InputMaybe<DocumentsUserHasAggregateInput>;
  userHasConnection?: InputMaybe<DocumentsUserHasConnectionWhere>;
  userHasConnection_NOT?: InputMaybe<DocumentsUserHasConnectionWhere>;
  userHas_NOT?: InputMaybe<UserWhere>;
};

export type Employee = {
  __typename?: 'Employee';
  employerEmail: Scalars['String']['output'];
  id: Scalars['String']['output'];
  userHas?: Maybe<User>;
  userHasAggregate?: Maybe<EmployeeUserUserHasAggregationSelection>;
  userHasConnection: EmployeeUserHasConnection;
};


export type EmployeeUserHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type EmployeeUserHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type EmployeeUserHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EmployeeUserHasConnectionSort>>;
  where?: InputMaybe<EmployeeUserHasConnectionWhere>;
};

export type EmployeeAggregateSelection = {
  __typename?: 'EmployeeAggregateSelection';
  count: Scalars['Int']['output'];
  employerEmail: StringAggregateSelectionNonNullable;
  id: StringAggregateSelectionNonNullable;
};

export type EmployeeConnectInput = {
  userHas?: InputMaybe<EmployeeUserHasConnectFieldInput>;
};

export type EmployeeConnectOrCreateInput = {
  userHas?: InputMaybe<EmployeeUserHasConnectOrCreateFieldInput>;
};

export type EmployeeConnectWhere = {
  node: EmployeeWhere;
};

export type EmployeeCreateInput = {
  employerEmail: Scalars['String']['input'];
  id: Scalars['String']['input'];
  userHas?: InputMaybe<EmployeeUserHasFieldInput>;
};

export type EmployeeDeleteInput = {
  userHas?: InputMaybe<EmployeeUserHasDeleteFieldInput>;
};

export type EmployeeDisconnectInput = {
  userHas?: InputMaybe<EmployeeUserHasDisconnectFieldInput>;
};

export type EmployeeEdge = {
  __typename?: 'EmployeeEdge';
  cursor: Scalars['String']['output'];
  node: Employee;
};

export type EmployeeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more EmployeeSort objects to sort Employees by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EmployeeSort>>;
};

export type EmployeeRelationInput = {
  userHas?: InputMaybe<EmployeeUserHasCreateFieldInput>;
};

/** Fields to sort Employees by. The order in which sorts are applied is not guaranteed when specifying many fields in one EmployeeSort object. */
export type EmployeeSort = {
  employerEmail?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type EmployeeUpdateInput = {
  employerEmail?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userHas?: InputMaybe<EmployeeUserHasUpdateFieldInput>;
};

export type EmployeeUserHasAggregateInput = {
  AND?: InputMaybe<Array<EmployeeUserHasAggregateInput>>;
  NOT?: InputMaybe<EmployeeUserHasAggregateInput>;
  OR?: InputMaybe<Array<EmployeeUserHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EmployeeUserHasNodeAggregationWhereInput>;
};

export type EmployeeUserHasConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type EmployeeUserHasConnectOrCreateFieldInput = {
  onCreate: EmployeeUserHasConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type EmployeeUserHasConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type EmployeeUserHasConnection = {
  __typename?: 'EmployeeUserHasConnection';
  edges: Array<EmployeeUserHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EmployeeUserHasConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type EmployeeUserHasConnectionWhere = {
  AND?: InputMaybe<Array<EmployeeUserHasConnectionWhere>>;
  NOT?: InputMaybe<EmployeeUserHasConnectionWhere>;
  OR?: InputMaybe<Array<EmployeeUserHasConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type EmployeeUserHasCreateFieldInput = {
  node: UserCreateInput;
};

export type EmployeeUserHasDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<EmployeeUserHasConnectionWhere>;
};

export type EmployeeUserHasDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<EmployeeUserHasConnectionWhere>;
};

export type EmployeeUserHasFieldInput = {
  connect?: InputMaybe<EmployeeUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmployeeUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<EmployeeUserHasCreateFieldInput>;
};

export type EmployeeUserHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmployeeUserHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EmployeeUserHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EmployeeUserHasNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type EmployeeUserHasRelationship = {
  __typename?: 'EmployeeUserHasRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type EmployeeUserHasUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type EmployeeUserHasUpdateFieldInput = {
  connect?: InputMaybe<EmployeeUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmployeeUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<EmployeeUserHasCreateFieldInput>;
  delete?: InputMaybe<EmployeeUserHasDeleteFieldInput>;
  disconnect?: InputMaybe<EmployeeUserHasDisconnectFieldInput>;
  update?: InputMaybe<EmployeeUserHasUpdateConnectionInput>;
  where?: InputMaybe<EmployeeUserHasConnectionWhere>;
};

export type EmployeeUserUserHasAggregationSelection = {
  __typename?: 'EmployeeUserUserHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EmployeeUserUserHasNodeAggregateSelection>;
};

export type EmployeeUserUserHasNodeAggregateSelection = {
  __typename?: 'EmployeeUserUserHasNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type EmployeeWhere = {
  AND?: InputMaybe<Array<EmployeeWhere>>;
  NOT?: InputMaybe<EmployeeWhere>;
  OR?: InputMaybe<Array<EmployeeWhere>>;
  employerEmail?: InputMaybe<Scalars['String']['input']>;
  employerEmail_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  employerEmail_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  employerEmail_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  employerEmail_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  userHas?: InputMaybe<UserWhere>;
  userHasAggregate?: InputMaybe<EmployeeUserHasAggregateInput>;
  userHasConnection?: InputMaybe<EmployeeUserHasConnectionWhere>;
  userHasConnection_NOT?: InputMaybe<EmployeeUserHasConnectionWhere>;
  userHas_NOT?: InputMaybe<UserWhere>;
};

export type EmployeesConnection = {
  __typename?: 'EmployeesConnection';
  edges: Array<EmployeeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Files = {
  __typename?: 'Files';
  documentsHas?: Maybe<Documents>;
  documentsHasAggregate?: Maybe<FilesDocumentsDocumentsHasAggregationSelection>;
  documentsHasConnection: FilesDocumentsHasConnection;
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type FilesDocumentsHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DocumentsOptions>;
  where?: InputMaybe<DocumentsWhere>;
};


export type FilesDocumentsHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocumentsWhere>;
};


export type FilesDocumentsHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesDocumentsHasConnectionSort>>;
  where?: InputMaybe<FilesDocumentsHasConnectionWhere>;
};

export type FilesAggregateSelection = {
  __typename?: 'FilesAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type FilesConnectInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasConnectFieldInput>;
};

export type FilesConnectOrCreateWhere = {
  node: FilesUniqueWhere;
};

export type FilesConnectWhere = {
  node: FilesWhere;
};

export type FilesConnection = {
  __typename?: 'FilesConnection';
  edges: Array<FilesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FilesCreateInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasFieldInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FilesDeleteInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasDeleteFieldInput>;
};

export type FilesDisconnectInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasDisconnectFieldInput>;
};

export type FilesDocumentsDocumentsHasAggregationSelection = {
  __typename?: 'FilesDocumentsDocumentsHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FilesDocumentsDocumentsHasNodeAggregateSelection>;
};

export type FilesDocumentsDocumentsHasNodeAggregateSelection = {
  __typename?: 'FilesDocumentsDocumentsHasNodeAggregateSelection';
  id: StringAggregateSelectionNullable;
};

export type FilesDocumentsHasAggregateInput = {
  AND?: InputMaybe<Array<FilesDocumentsHasAggregateInput>>;
  NOT?: InputMaybe<FilesDocumentsHasAggregateInput>;
  OR?: InputMaybe<Array<FilesDocumentsHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FilesDocumentsHasNodeAggregationWhereInput>;
};

export type FilesDocumentsHasConnectFieldInput = {
  connect?: InputMaybe<DocumentsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DocumentsConnectWhere>;
};

export type FilesDocumentsHasConnection = {
  __typename?: 'FilesDocumentsHasConnection';
  edges: Array<FilesDocumentsHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FilesDocumentsHasConnectionSort = {
  node?: InputMaybe<DocumentsSort>;
};

export type FilesDocumentsHasConnectionWhere = {
  AND?: InputMaybe<Array<FilesDocumentsHasConnectionWhere>>;
  NOT?: InputMaybe<FilesDocumentsHasConnectionWhere>;
  OR?: InputMaybe<Array<FilesDocumentsHasConnectionWhere>>;
  node?: InputMaybe<DocumentsWhere>;
};

export type FilesDocumentsHasCreateFieldInput = {
  node: DocumentsCreateInput;
};

export type FilesDocumentsHasDeleteFieldInput = {
  delete?: InputMaybe<DocumentsDeleteInput>;
  where?: InputMaybe<FilesDocumentsHasConnectionWhere>;
};

export type FilesDocumentsHasDisconnectFieldInput = {
  disconnect?: InputMaybe<DocumentsDisconnectInput>;
  where?: InputMaybe<FilesDocumentsHasConnectionWhere>;
};

export type FilesDocumentsHasFieldInput = {
  connect?: InputMaybe<FilesDocumentsHasConnectFieldInput>;
  create?: InputMaybe<FilesDocumentsHasCreateFieldInput>;
};

export type FilesDocumentsHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FilesDocumentsHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FilesDocumentsHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FilesDocumentsHasNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FilesDocumentsHasRelationship = {
  __typename?: 'FilesDocumentsHasRelationship';
  cursor: Scalars['String']['output'];
  node: Documents;
};

export type FilesDocumentsHasUpdateConnectionInput = {
  node?: InputMaybe<DocumentsUpdateInput>;
};

export type FilesDocumentsHasUpdateFieldInput = {
  connect?: InputMaybe<FilesDocumentsHasConnectFieldInput>;
  create?: InputMaybe<FilesDocumentsHasCreateFieldInput>;
  delete?: InputMaybe<FilesDocumentsHasDeleteFieldInput>;
  disconnect?: InputMaybe<FilesDocumentsHasDisconnectFieldInput>;
  update?: InputMaybe<FilesDocumentsHasUpdateConnectionInput>;
  where?: InputMaybe<FilesDocumentsHasConnectionWhere>;
};

export type FilesEdge = {
  __typename?: 'FilesEdge';
  cursor: Scalars['String']['output'];
  node: Files;
};

export type FilesOnCreateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FilesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FilesSort objects to sort Files by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FilesSort>>;
};

export type FilesRelationInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasCreateFieldInput>;
};

/** Fields to sort Files by. The order in which sorts are applied is not guaranteed when specifying many fields in one FilesSort object. */
export type FilesSort = {
  id?: InputMaybe<SortDirection>;
};

export type FilesUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FilesUpdateInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasUpdateFieldInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  links_POP?: InputMaybe<Scalars['Int']['input']>;
  links_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FilesWhere = {
  AND?: InputMaybe<Array<FilesWhere>>;
  NOT?: InputMaybe<FilesWhere>;
  OR?: InputMaybe<Array<FilesWhere>>;
  documentsHas?: InputMaybe<DocumentsWhere>;
  documentsHasAggregate?: InputMaybe<FilesDocumentsHasAggregateInput>;
  documentsHasConnection?: InputMaybe<FilesDocumentsHasConnectionWhere>;
  documentsHasConnection_NOT?: InputMaybe<FilesDocumentsHasConnectionWhere>;
  documentsHas_NOT?: InputMaybe<DocumentsWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  links_INCLUDES?: InputMaybe<Scalars['String']['input']>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type IdAggregateSelectionNullable = {
  __typename?: 'IDAggregateSelectionNullable';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

export type Images = {
  __typename?: 'Images';
  documentsHas?: Maybe<Documents>;
  documentsHasAggregate?: Maybe<ImagesDocumentsDocumentsHasAggregationSelection>;
  documentsHasConnection: ImagesDocumentsHasConnection;
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ImagesDocumentsHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DocumentsOptions>;
  where?: InputMaybe<DocumentsWhere>;
};


export type ImagesDocumentsHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocumentsWhere>;
};


export type ImagesDocumentsHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImagesDocumentsHasConnectionSort>>;
  where?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
};

export type ImagesAggregateSelection = {
  __typename?: 'ImagesAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type ImagesConnectInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasConnectFieldInput>;
};

export type ImagesConnectOrCreateWhere = {
  node: ImagesUniqueWhere;
};

export type ImagesConnectWhere = {
  node: ImagesWhere;
};

export type ImagesConnection = {
  __typename?: 'ImagesConnection';
  edges: Array<ImagesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImagesCreateInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasFieldInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImagesDeleteInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasDeleteFieldInput>;
};

export type ImagesDisconnectInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasDisconnectFieldInput>;
};

export type ImagesDocumentsDocumentsHasAggregationSelection = {
  __typename?: 'ImagesDocumentsDocumentsHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ImagesDocumentsDocumentsHasNodeAggregateSelection>;
};

export type ImagesDocumentsDocumentsHasNodeAggregateSelection = {
  __typename?: 'ImagesDocumentsDocumentsHasNodeAggregateSelection';
  id: StringAggregateSelectionNullable;
};

export type ImagesDocumentsHasAggregateInput = {
  AND?: InputMaybe<Array<ImagesDocumentsHasAggregateInput>>;
  NOT?: InputMaybe<ImagesDocumentsHasAggregateInput>;
  OR?: InputMaybe<Array<ImagesDocumentsHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ImagesDocumentsHasNodeAggregationWhereInput>;
};

export type ImagesDocumentsHasConnectFieldInput = {
  connect?: InputMaybe<DocumentsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DocumentsConnectWhere>;
};

export type ImagesDocumentsHasConnection = {
  __typename?: 'ImagesDocumentsHasConnection';
  edges: Array<ImagesDocumentsHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ImagesDocumentsHasConnectionSort = {
  node?: InputMaybe<DocumentsSort>;
};

export type ImagesDocumentsHasConnectionWhere = {
  AND?: InputMaybe<Array<ImagesDocumentsHasConnectionWhere>>;
  NOT?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
  OR?: InputMaybe<Array<ImagesDocumentsHasConnectionWhere>>;
  node?: InputMaybe<DocumentsWhere>;
};

export type ImagesDocumentsHasCreateFieldInput = {
  node: DocumentsCreateInput;
};

export type ImagesDocumentsHasDeleteFieldInput = {
  delete?: InputMaybe<DocumentsDeleteInput>;
  where?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
};

export type ImagesDocumentsHasDisconnectFieldInput = {
  disconnect?: InputMaybe<DocumentsDisconnectInput>;
  where?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
};

export type ImagesDocumentsHasFieldInput = {
  connect?: InputMaybe<ImagesDocumentsHasConnectFieldInput>;
  create?: InputMaybe<ImagesDocumentsHasCreateFieldInput>;
};

export type ImagesDocumentsHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImagesDocumentsHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImagesDocumentsHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImagesDocumentsHasNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ImagesDocumentsHasRelationship = {
  __typename?: 'ImagesDocumentsHasRelationship';
  cursor: Scalars['String']['output'];
  node: Documents;
};

export type ImagesDocumentsHasUpdateConnectionInput = {
  node?: InputMaybe<DocumentsUpdateInput>;
};

export type ImagesDocumentsHasUpdateFieldInput = {
  connect?: InputMaybe<ImagesDocumentsHasConnectFieldInput>;
  create?: InputMaybe<ImagesDocumentsHasCreateFieldInput>;
  delete?: InputMaybe<ImagesDocumentsHasDeleteFieldInput>;
  disconnect?: InputMaybe<ImagesDocumentsHasDisconnectFieldInput>;
  update?: InputMaybe<ImagesDocumentsHasUpdateConnectionInput>;
  where?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
};

export type ImagesEdge = {
  __typename?: 'ImagesEdge';
  cursor: Scalars['String']['output'];
  node: Images;
};

export type ImagesOnCreateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImagesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ImagesSort objects to sort Images by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ImagesSort>>;
};

export type ImagesRelationInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasCreateFieldInput>;
};

/** Fields to sort Images by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImagesSort object. */
export type ImagesSort = {
  id?: InputMaybe<SortDirection>;
};

export type ImagesUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImagesUpdateInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasUpdateFieldInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  links_POP?: InputMaybe<Scalars['Int']['input']>;
  links_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImagesWhere = {
  AND?: InputMaybe<Array<ImagesWhere>>;
  NOT?: InputMaybe<ImagesWhere>;
  OR?: InputMaybe<Array<ImagesWhere>>;
  documentsHas?: InputMaybe<DocumentsWhere>;
  documentsHasAggregate?: InputMaybe<ImagesDocumentsHasAggregateInput>;
  documentsHasConnection?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
  documentsHasConnection_NOT?: InputMaybe<ImagesDocumentsHasConnectionWhere>;
  documentsHas_NOT?: InputMaybe<DocumentsWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  links_INCLUDES?: InputMaybe<Scalars['String']['input']>;
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<InvoiceAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: InvoiceAdminCreatedConnection;
  clientAddress?: Maybe<Scalars['String']['output']>;
  clientEmail?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  complain?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hasAdmin?: Maybe<Admin>;
  hasAdminAggregate?: Maybe<InvoiceAdminHasAdminAggregationSelection>;
  hasAdminConnection: InvoiceHasAdminConnection;
  hasClient?: Maybe<Client>;
  hasClientAggregate?: Maybe<InvoiceClientHasClientAggregationSelection>;
  hasClientConnection: InvoiceHasClientConnection;
  hasService: Array<Service>;
  hasServiceAggregate?: Maybe<InvoiceServiceHasServiceAggregationSelection>;
  hasServiceConnection: InvoiceHasServiceConnection;
  id: Scalars['ID']['output'];
  priceWithTax?: Maybe<Scalars['Int']['output']>;
  sentBy?: Maybe<SentBy>;
  status?: Maybe<InvoiceStatus>;
  taxRate?: Maybe<Scalars['Int']['output']>;
  taxType?: Maybe<Scalars['String']['output']>;
  totalPrice?: Maybe<Scalars['Int']['output']>;
  vendorCreated?: Maybe<Vendor>;
  vendorCreatedAggregate?: Maybe<InvoiceVendorVendorCreatedAggregationSelection>;
  vendorCreatedConnection: InvoiceVendorCreatedConnection;
};


export type InvoiceAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type InvoiceAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type InvoiceAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InvoiceAdminCreatedConnectionSort>>;
  where?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
};


export type InvoiceHasAdminArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type InvoiceHasAdminAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type InvoiceHasAdminConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InvoiceHasAdminConnectionSort>>;
  where?: InputMaybe<InvoiceHasAdminConnectionWhere>;
};


export type InvoiceHasClientArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type InvoiceHasClientAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type InvoiceHasClientConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InvoiceHasClientConnectionSort>>;
  where?: InputMaybe<InvoiceHasClientConnectionWhere>;
};


export type InvoiceHasServiceArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ServiceOptions>;
  where?: InputMaybe<ServiceWhere>;
};


export type InvoiceHasServiceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ServiceWhere>;
};


export type InvoiceHasServiceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InvoiceHasServiceConnectionSort>>;
  where?: InputMaybe<InvoiceHasServiceConnectionWhere>;
};


export type InvoiceVendorCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type InvoiceVendorCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type InvoiceVendorCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InvoiceVendorCreatedConnectionSort>>;
  where?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
};

export type InvoiceAdminAdminCreatedAggregationSelection = {
  __typename?: 'InvoiceAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<InvoiceAdminAdminCreatedNodeAggregateSelection>;
};

export type InvoiceAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'InvoiceAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type InvoiceAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<InvoiceAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<InvoiceAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<InvoiceAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<InvoiceAdminCreatedNodeAggregationWhereInput>;
};

export type InvoiceAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type InvoiceAdminCreatedConnectOrCreateFieldInput = {
  onCreate: InvoiceAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type InvoiceAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type InvoiceAdminCreatedConnection = {
  __typename?: 'InvoiceAdminCreatedConnection';
  edges: Array<InvoiceAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InvoiceAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type InvoiceAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<InvoiceAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<InvoiceAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type InvoiceAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type InvoiceAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
};

export type InvoiceAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
};

export type InvoiceAdminCreatedFieldInput = {
  connect?: InputMaybe<InvoiceAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceAdminCreatedCreateFieldInput>;
};

export type InvoiceAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InvoiceAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<InvoiceAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<InvoiceAdminCreatedNodeAggregationWhereInput>>;
};

export type InvoiceAdminCreatedRelationship = {
  __typename?: 'InvoiceAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type InvoiceAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type InvoiceAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<InvoiceAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<InvoiceAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<InvoiceAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<InvoiceAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
};

export type InvoiceAdminHasAdminAggregationSelection = {
  __typename?: 'InvoiceAdminHasAdminAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<InvoiceAdminHasAdminNodeAggregateSelection>;
};

export type InvoiceAdminHasAdminNodeAggregateSelection = {
  __typename?: 'InvoiceAdminHasAdminNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type InvoiceAggregateSelection = {
  __typename?: 'InvoiceAggregateSelection';
  clientAddress: StringAggregateSelectionNullable;
  clientEmail: StringAggregateSelectionNullable;
  clientName: StringAggregateSelectionNullable;
  complain: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  priceWithTax: IntAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type InvoiceClientHasClientAggregationSelection = {
  __typename?: 'InvoiceClientHasClientAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<InvoiceClientHasClientNodeAggregateSelection>;
};

export type InvoiceClientHasClientNodeAggregateSelection = {
  __typename?: 'InvoiceClientHasClientNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type InvoiceConnectInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedConnectFieldInput>;
  hasAdmin?: InputMaybe<InvoiceHasAdminConnectFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientConnectFieldInput>;
  hasService?: InputMaybe<Array<InvoiceHasServiceConnectFieldInput>>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedConnectFieldInput>;
};

export type InvoiceConnectOrCreateInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedConnectOrCreateFieldInput>;
  hasAdmin?: InputMaybe<InvoiceHasAdminConnectOrCreateFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientConnectOrCreateFieldInput>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedConnectOrCreateFieldInput>;
};

export type InvoiceConnectOrCreateWhere = {
  node: InvoiceUniqueWhere;
};

export type InvoiceConnectWhere = {
  node: InvoiceWhere;
};

export type InvoiceCreateInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedFieldInput>;
  clientAddress?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  complain?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  hasAdmin?: InputMaybe<InvoiceHasAdminFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientFieldInput>;
  hasService?: InputMaybe<InvoiceHasServiceFieldInput>;
  priceWithTax?: InputMaybe<Scalars['Int']['input']>;
  sentBy?: InputMaybe<SentBy>;
  status?: InputMaybe<InvoiceStatus>;
  taxRate?: InputMaybe<Scalars['Int']['input']>;
  taxType?: InputMaybe<Scalars['String']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedFieldInput>;
};

export type InvoiceDeleteInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedDeleteFieldInput>;
  hasAdmin?: InputMaybe<InvoiceHasAdminDeleteFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientDeleteFieldInput>;
  hasService?: InputMaybe<Array<InvoiceHasServiceDeleteFieldInput>>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedDeleteFieldInput>;
};

export type InvoiceDisconnectInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedDisconnectFieldInput>;
  hasAdmin?: InputMaybe<InvoiceHasAdminDisconnectFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientDisconnectFieldInput>;
  hasService?: InputMaybe<Array<InvoiceHasServiceDisconnectFieldInput>>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedDisconnectFieldInput>;
};

export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

export type InvoiceHasAdminAggregateInput = {
  AND?: InputMaybe<Array<InvoiceHasAdminAggregateInput>>;
  NOT?: InputMaybe<InvoiceHasAdminAggregateInput>;
  OR?: InputMaybe<Array<InvoiceHasAdminAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<InvoiceHasAdminNodeAggregationWhereInput>;
};

export type InvoiceHasAdminConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type InvoiceHasAdminConnectOrCreateFieldInput = {
  onCreate: InvoiceHasAdminConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type InvoiceHasAdminConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type InvoiceHasAdminConnection = {
  __typename?: 'InvoiceHasAdminConnection';
  edges: Array<InvoiceHasAdminRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InvoiceHasAdminConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type InvoiceHasAdminConnectionWhere = {
  AND?: InputMaybe<Array<InvoiceHasAdminConnectionWhere>>;
  NOT?: InputMaybe<InvoiceHasAdminConnectionWhere>;
  OR?: InputMaybe<Array<InvoiceHasAdminConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type InvoiceHasAdminCreateFieldInput = {
  node: AdminCreateInput;
};

export type InvoiceHasAdminDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<InvoiceHasAdminConnectionWhere>;
};

export type InvoiceHasAdminDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<InvoiceHasAdminConnectionWhere>;
};

export type InvoiceHasAdminFieldInput = {
  connect?: InputMaybe<InvoiceHasAdminConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceHasAdminConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceHasAdminCreateFieldInput>;
};

export type InvoiceHasAdminNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InvoiceHasAdminNodeAggregationWhereInput>>;
  NOT?: InputMaybe<InvoiceHasAdminNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<InvoiceHasAdminNodeAggregationWhereInput>>;
};

export type InvoiceHasAdminRelationship = {
  __typename?: 'InvoiceHasAdminRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type InvoiceHasAdminUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type InvoiceHasAdminUpdateFieldInput = {
  connect?: InputMaybe<InvoiceHasAdminConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceHasAdminConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceHasAdminCreateFieldInput>;
  delete?: InputMaybe<InvoiceHasAdminDeleteFieldInput>;
  disconnect?: InputMaybe<InvoiceHasAdminDisconnectFieldInput>;
  update?: InputMaybe<InvoiceHasAdminUpdateConnectionInput>;
  where?: InputMaybe<InvoiceHasAdminConnectionWhere>;
};

export type InvoiceHasClientAggregateInput = {
  AND?: InputMaybe<Array<InvoiceHasClientAggregateInput>>;
  NOT?: InputMaybe<InvoiceHasClientAggregateInput>;
  OR?: InputMaybe<Array<InvoiceHasClientAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<InvoiceHasClientNodeAggregationWhereInput>;
};

export type InvoiceHasClientConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type InvoiceHasClientConnectOrCreateFieldInput = {
  onCreate: InvoiceHasClientConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type InvoiceHasClientConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type InvoiceHasClientConnection = {
  __typename?: 'InvoiceHasClientConnection';
  edges: Array<InvoiceHasClientRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InvoiceHasClientConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type InvoiceHasClientConnectionWhere = {
  AND?: InputMaybe<Array<InvoiceHasClientConnectionWhere>>;
  NOT?: InputMaybe<InvoiceHasClientConnectionWhere>;
  OR?: InputMaybe<Array<InvoiceHasClientConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type InvoiceHasClientCreateFieldInput = {
  node: ClientCreateInput;
};

export type InvoiceHasClientDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<InvoiceHasClientConnectionWhere>;
};

export type InvoiceHasClientDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<InvoiceHasClientConnectionWhere>;
};

export type InvoiceHasClientFieldInput = {
  connect?: InputMaybe<InvoiceHasClientConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceHasClientConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceHasClientCreateFieldInput>;
};

export type InvoiceHasClientNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InvoiceHasClientNodeAggregationWhereInput>>;
  NOT?: InputMaybe<InvoiceHasClientNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<InvoiceHasClientNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type InvoiceHasClientRelationship = {
  __typename?: 'InvoiceHasClientRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type InvoiceHasClientUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type InvoiceHasClientUpdateFieldInput = {
  connect?: InputMaybe<InvoiceHasClientConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceHasClientConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceHasClientCreateFieldInput>;
  delete?: InputMaybe<InvoiceHasClientDeleteFieldInput>;
  disconnect?: InputMaybe<InvoiceHasClientDisconnectFieldInput>;
  update?: InputMaybe<InvoiceHasClientUpdateConnectionInput>;
  where?: InputMaybe<InvoiceHasClientConnectionWhere>;
};

export type InvoiceHasServiceAggregateInput = {
  AND?: InputMaybe<Array<InvoiceHasServiceAggregateInput>>;
  NOT?: InputMaybe<InvoiceHasServiceAggregateInput>;
  OR?: InputMaybe<Array<InvoiceHasServiceAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<InvoiceHasServiceNodeAggregationWhereInput>;
};

export type InvoiceHasServiceConnectFieldInput = {
  connect?: InputMaybe<Array<ServiceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ServiceConnectWhere>;
};

export type InvoiceHasServiceConnection = {
  __typename?: 'InvoiceHasServiceConnection';
  edges: Array<InvoiceHasServiceRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InvoiceHasServiceConnectionSort = {
  node?: InputMaybe<ServiceSort>;
};

export type InvoiceHasServiceConnectionWhere = {
  AND?: InputMaybe<Array<InvoiceHasServiceConnectionWhere>>;
  NOT?: InputMaybe<InvoiceHasServiceConnectionWhere>;
  OR?: InputMaybe<Array<InvoiceHasServiceConnectionWhere>>;
  node?: InputMaybe<ServiceWhere>;
};

export type InvoiceHasServiceCreateFieldInput = {
  node: ServiceCreateInput;
};

export type InvoiceHasServiceDeleteFieldInput = {
  delete?: InputMaybe<ServiceDeleteInput>;
  where?: InputMaybe<InvoiceHasServiceConnectionWhere>;
};

export type InvoiceHasServiceDisconnectFieldInput = {
  disconnect?: InputMaybe<ServiceDisconnectInput>;
  where?: InputMaybe<InvoiceHasServiceConnectionWhere>;
};

export type InvoiceHasServiceFieldInput = {
  connect?: InputMaybe<Array<InvoiceHasServiceConnectFieldInput>>;
  create?: InputMaybe<Array<InvoiceHasServiceCreateFieldInput>>;
};

export type InvoiceHasServiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InvoiceHasServiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<InvoiceHasServiceNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<InvoiceHasServiceNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  price_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  serviceName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  serviceName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  serviceName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  serviceName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  serviceName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  serviceName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  serviceName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  serviceName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  serviceName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  serviceName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  serviceName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  serviceName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  serviceName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  serviceName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  serviceName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type InvoiceHasServiceRelationship = {
  __typename?: 'InvoiceHasServiceRelationship';
  cursor: Scalars['String']['output'];
  node: Service;
};

export type InvoiceHasServiceUpdateConnectionInput = {
  node?: InputMaybe<ServiceUpdateInput>;
};

export type InvoiceHasServiceUpdateFieldInput = {
  connect?: InputMaybe<Array<InvoiceHasServiceConnectFieldInput>>;
  create?: InputMaybe<Array<InvoiceHasServiceCreateFieldInput>>;
  delete?: InputMaybe<Array<InvoiceHasServiceDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<InvoiceHasServiceDisconnectFieldInput>>;
  update?: InputMaybe<InvoiceHasServiceUpdateConnectionInput>;
  where?: InputMaybe<InvoiceHasServiceConnectionWhere>;
};

export type InvoiceOnCreateInput = {
  clientAddress?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  complain?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  priceWithTax?: InputMaybe<Scalars['Int']['input']>;
  sentBy?: InputMaybe<SentBy>;
  status?: InputMaybe<InvoiceStatus>;
  taxRate?: InputMaybe<Scalars['Int']['input']>;
  taxType?: InputMaybe<Scalars['String']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type InvoiceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more InvoiceSort objects to sort Invoices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InvoiceSort>>;
};

export type InvoiceRelationInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedCreateFieldInput>;
  hasAdmin?: InputMaybe<InvoiceHasAdminCreateFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientCreateFieldInput>;
  hasService?: InputMaybe<Array<InvoiceHasServiceCreateFieldInput>>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedCreateFieldInput>;
};

export type InvoiceServiceHasServiceAggregationSelection = {
  __typename?: 'InvoiceServiceHasServiceAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<InvoiceServiceHasServiceNodeAggregateSelection>;
};

export type InvoiceServiceHasServiceNodeAggregateSelection = {
  __typename?: 'InvoiceServiceHasServiceNodeAggregateSelection';
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  serviceName: StringAggregateSelectionNullable;
};

/** Fields to sort Invoices by. The order in which sorts are applied is not guaranteed when specifying many fields in one InvoiceSort object. */
export type InvoiceSort = {
  clientAddress?: InputMaybe<SortDirection>;
  clientEmail?: InputMaybe<SortDirection>;
  clientName?: InputMaybe<SortDirection>;
  complain?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  priceWithTax?: InputMaybe<SortDirection>;
  sentBy?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  taxRate?: InputMaybe<SortDirection>;
  taxType?: InputMaybe<SortDirection>;
  totalPrice?: InputMaybe<SortDirection>;
};

export enum InvoiceStatus {
  Complained = 'COMPLAINED',
  Sent = 'SENT'
}

export type InvoiceUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type InvoiceUpdateInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedUpdateFieldInput>;
  clientAddress?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  complain?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  hasAdmin?: InputMaybe<InvoiceHasAdminUpdateFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientUpdateFieldInput>;
  hasService?: InputMaybe<Array<InvoiceHasServiceUpdateFieldInput>>;
  priceWithTax?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  sentBy?: InputMaybe<SentBy>;
  status?: InputMaybe<InvoiceStatus>;
  taxRate?: InputMaybe<Scalars['Int']['input']>;
  taxRate_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  taxType?: InputMaybe<Scalars['String']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  vendorCreated?: InputMaybe<InvoiceVendorCreatedUpdateFieldInput>;
};

export type InvoiceVendorCreatedAggregateInput = {
  AND?: InputMaybe<Array<InvoiceVendorCreatedAggregateInput>>;
  NOT?: InputMaybe<InvoiceVendorCreatedAggregateInput>;
  OR?: InputMaybe<Array<InvoiceVendorCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<InvoiceVendorCreatedNodeAggregationWhereInput>;
};

export type InvoiceVendorCreatedConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type InvoiceVendorCreatedConnectOrCreateFieldInput = {
  onCreate: InvoiceVendorCreatedConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type InvoiceVendorCreatedConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type InvoiceVendorCreatedConnection = {
  __typename?: 'InvoiceVendorCreatedConnection';
  edges: Array<InvoiceVendorCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InvoiceVendorCreatedConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type InvoiceVendorCreatedConnectionWhere = {
  AND?: InputMaybe<Array<InvoiceVendorCreatedConnectionWhere>>;
  NOT?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
  OR?: InputMaybe<Array<InvoiceVendorCreatedConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type InvoiceVendorCreatedCreateFieldInput = {
  node: VendorCreateInput;
};

export type InvoiceVendorCreatedDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
};

export type InvoiceVendorCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
};

export type InvoiceVendorCreatedFieldInput = {
  connect?: InputMaybe<InvoiceVendorCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceVendorCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceVendorCreatedCreateFieldInput>;
};

export type InvoiceVendorCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InvoiceVendorCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<InvoiceVendorCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<InvoiceVendorCreatedNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type InvoiceVendorCreatedRelationship = {
  __typename?: 'InvoiceVendorCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type InvoiceVendorCreatedUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type InvoiceVendorCreatedUpdateFieldInput = {
  connect?: InputMaybe<InvoiceVendorCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<InvoiceVendorCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<InvoiceVendorCreatedCreateFieldInput>;
  delete?: InputMaybe<InvoiceVendorCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<InvoiceVendorCreatedDisconnectFieldInput>;
  update?: InputMaybe<InvoiceVendorCreatedUpdateConnectionInput>;
  where?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
};

export type InvoiceVendorVendorCreatedAggregationSelection = {
  __typename?: 'InvoiceVendorVendorCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<InvoiceVendorVendorCreatedNodeAggregateSelection>;
};

export type InvoiceVendorVendorCreatedNodeAggregateSelection = {
  __typename?: 'InvoiceVendorVendorCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type InvoiceWhere = {
  AND?: InputMaybe<Array<InvoiceWhere>>;
  NOT?: InputMaybe<InvoiceWhere>;
  OR?: InputMaybe<Array<InvoiceWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<InvoiceAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<InvoiceAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  clientAddress?: InputMaybe<Scalars['String']['input']>;
  clientAddress_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  clientAddress_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  clientAddress_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientAddress_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientEmail_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  clientEmail_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  clientEmail_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientEmail_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  clientName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  clientName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  clientName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  complain?: InputMaybe<Scalars['String']['input']>;
  complain_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  complain_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  complain_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complain_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  hasAdmin?: InputMaybe<AdminWhere>;
  hasAdminAggregate?: InputMaybe<InvoiceHasAdminAggregateInput>;
  hasAdminConnection?: InputMaybe<InvoiceHasAdminConnectionWhere>;
  hasAdminConnection_NOT?: InputMaybe<InvoiceHasAdminConnectionWhere>;
  hasAdmin_NOT?: InputMaybe<AdminWhere>;
  hasClient?: InputMaybe<ClientWhere>;
  hasClientAggregate?: InputMaybe<InvoiceHasClientAggregateInput>;
  hasClientConnection?: InputMaybe<InvoiceHasClientConnectionWhere>;
  hasClientConnection_NOT?: InputMaybe<InvoiceHasClientConnectionWhere>;
  hasClient_NOT?: InputMaybe<ClientWhere>;
  hasServiceAggregate?: InputMaybe<InvoiceHasServiceAggregateInput>;
  /** Return Invoices where all of the related InvoiceHasServiceConnections match this filter */
  hasServiceConnection_ALL?: InputMaybe<InvoiceHasServiceConnectionWhere>;
  /** Return Invoices where none of the related InvoiceHasServiceConnections match this filter */
  hasServiceConnection_NONE?: InputMaybe<InvoiceHasServiceConnectionWhere>;
  /** Return Invoices where one of the related InvoiceHasServiceConnections match this filter */
  hasServiceConnection_SINGLE?: InputMaybe<InvoiceHasServiceConnectionWhere>;
  /** Return Invoices where some of the related InvoiceHasServiceConnections match this filter */
  hasServiceConnection_SOME?: InputMaybe<InvoiceHasServiceConnectionWhere>;
  /** Return Invoices where all of the related Services match this filter */
  hasService_ALL?: InputMaybe<ServiceWhere>;
  /** Return Invoices where none of the related Services match this filter */
  hasService_NONE?: InputMaybe<ServiceWhere>;
  /** Return Invoices where one of the related Services match this filter */
  hasService_SINGLE?: InputMaybe<ServiceWhere>;
  /** Return Invoices where some of the related Services match this filter */
  hasService_SOME?: InputMaybe<ServiceWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  priceWithTax?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  priceWithTax_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_LTE?: InputMaybe<Scalars['Int']['input']>;
  sentBy?: InputMaybe<SentBy>;
  sentBy_IN?: InputMaybe<Array<InputMaybe<SentBy>>>;
  status?: InputMaybe<InvoiceStatus>;
  status_IN?: InputMaybe<Array<InputMaybe<InvoiceStatus>>>;
  taxRate?: InputMaybe<Scalars['Int']['input']>;
  taxRate_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  taxRate_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType?: InputMaybe<Scalars['String']['input']>;
  taxType_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  taxType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  taxType_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalPrice_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorCreated?: InputMaybe<VendorWhere>;
  vendorCreatedAggregate?: InputMaybe<InvoiceVendorCreatedAggregateInput>;
  vendorCreatedConnection?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
  vendorCreatedConnection_NOT?: InputMaybe<InvoiceVendorCreatedConnectionWhere>;
  vendorCreated_NOT?: InputMaybe<VendorWhere>;
};

export type InvoicesConnection = {
  __typename?: 'InvoicesConnection';
  edges: Array<InvoiceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Leads = {
  __typename?: 'Leads';
  adminHas?: Maybe<Admin>;
  adminHasAggregate?: Maybe<LeadsAdminAdminHasAggregationSelection>;
  adminHasConnection: LeadsAdminHasConnection;
  clientHas?: Maybe<Client>;
  clientHasAggregate?: Maybe<LeadsClientClientHasAggregationSelection>;
  clientHasConnection: LeadsClientHasConnection;
  condition?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  gstNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Status>;
  vendorAddress?: Maybe<Scalars['String']['output']>;
  vendorHas?: Maybe<Vendor>;
  vendorHasAggregate?: Maybe<LeadsVendorVendorHasAggregationSelection>;
  vendorHasConnection: LeadsVendorHasConnection;
};


export type LeadsAdminHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type LeadsAdminHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type LeadsAdminHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LeadsAdminHasConnectionSort>>;
  where?: InputMaybe<LeadsAdminHasConnectionWhere>;
};


export type LeadsClientHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type LeadsClientHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type LeadsClientHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LeadsClientHasConnectionSort>>;
  where?: InputMaybe<LeadsClientHasConnectionWhere>;
};


export type LeadsVendorHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type LeadsVendorHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type LeadsVendorHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LeadsVendorHasConnectionSort>>;
  where?: InputMaybe<LeadsVendorHasConnectionWhere>;
};

export type LeadsAdminAdminHasAggregationSelection = {
  __typename?: 'LeadsAdminAdminHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<LeadsAdminAdminHasNodeAggregateSelection>;
};

export type LeadsAdminAdminHasNodeAggregateSelection = {
  __typename?: 'LeadsAdminAdminHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type LeadsAdminHasAggregateInput = {
  AND?: InputMaybe<Array<LeadsAdminHasAggregateInput>>;
  NOT?: InputMaybe<LeadsAdminHasAggregateInput>;
  OR?: InputMaybe<Array<LeadsAdminHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<LeadsAdminHasNodeAggregationWhereInput>;
};

export type LeadsAdminHasConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type LeadsAdminHasConnectOrCreateFieldInput = {
  onCreate: LeadsAdminHasConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type LeadsAdminHasConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type LeadsAdminHasConnection = {
  __typename?: 'LeadsAdminHasConnection';
  edges: Array<LeadsAdminHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LeadsAdminHasConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type LeadsAdminHasConnectionWhere = {
  AND?: InputMaybe<Array<LeadsAdminHasConnectionWhere>>;
  NOT?: InputMaybe<LeadsAdminHasConnectionWhere>;
  OR?: InputMaybe<Array<LeadsAdminHasConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type LeadsAdminHasCreateFieldInput = {
  node: AdminCreateInput;
};

export type LeadsAdminHasDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<LeadsAdminHasConnectionWhere>;
};

export type LeadsAdminHasDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<LeadsAdminHasConnectionWhere>;
};

export type LeadsAdminHasFieldInput = {
  connect?: InputMaybe<LeadsAdminHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<LeadsAdminHasConnectOrCreateFieldInput>;
  create?: InputMaybe<LeadsAdminHasCreateFieldInput>;
};

export type LeadsAdminHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LeadsAdminHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LeadsAdminHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LeadsAdminHasNodeAggregationWhereInput>>;
};

export type LeadsAdminHasRelationship = {
  __typename?: 'LeadsAdminHasRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type LeadsAdminHasUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type LeadsAdminHasUpdateFieldInput = {
  connect?: InputMaybe<LeadsAdminHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<LeadsAdminHasConnectOrCreateFieldInput>;
  create?: InputMaybe<LeadsAdminHasCreateFieldInput>;
  delete?: InputMaybe<LeadsAdminHasDeleteFieldInput>;
  disconnect?: InputMaybe<LeadsAdminHasDisconnectFieldInput>;
  update?: InputMaybe<LeadsAdminHasUpdateConnectionInput>;
  where?: InputMaybe<LeadsAdminHasConnectionWhere>;
};

export type LeadsAggregateSelection = {
  __typename?: 'LeadsAggregateSelection';
  condition: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: StringAggregateSelectionNullable;
  duration: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  industry: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  vendorAddress: StringAggregateSelectionNullable;
};

export type LeadsClientClientHasAggregationSelection = {
  __typename?: 'LeadsClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<LeadsClientClientHasNodeAggregateSelection>;
};

export type LeadsClientClientHasNodeAggregateSelection = {
  __typename?: 'LeadsClientClientHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type LeadsClientHasAggregateInput = {
  AND?: InputMaybe<Array<LeadsClientHasAggregateInput>>;
  NOT?: InputMaybe<LeadsClientHasAggregateInput>;
  OR?: InputMaybe<Array<LeadsClientHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<LeadsClientHasNodeAggregationWhereInput>;
};

export type LeadsClientHasConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type LeadsClientHasConnectOrCreateFieldInput = {
  onCreate: LeadsClientHasConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type LeadsClientHasConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type LeadsClientHasConnection = {
  __typename?: 'LeadsClientHasConnection';
  edges: Array<LeadsClientHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LeadsClientHasConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type LeadsClientHasConnectionWhere = {
  AND?: InputMaybe<Array<LeadsClientHasConnectionWhere>>;
  NOT?: InputMaybe<LeadsClientHasConnectionWhere>;
  OR?: InputMaybe<Array<LeadsClientHasConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type LeadsClientHasCreateFieldInput = {
  node: ClientCreateInput;
};

export type LeadsClientHasDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<LeadsClientHasConnectionWhere>;
};

export type LeadsClientHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<LeadsClientHasConnectionWhere>;
};

export type LeadsClientHasFieldInput = {
  connect?: InputMaybe<LeadsClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<LeadsClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<LeadsClientHasCreateFieldInput>;
};

export type LeadsClientHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LeadsClientHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LeadsClientHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LeadsClientHasNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type LeadsClientHasRelationship = {
  __typename?: 'LeadsClientHasRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type LeadsClientHasUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type LeadsClientHasUpdateFieldInput = {
  connect?: InputMaybe<LeadsClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<LeadsClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<LeadsClientHasCreateFieldInput>;
  delete?: InputMaybe<LeadsClientHasDeleteFieldInput>;
  disconnect?: InputMaybe<LeadsClientHasDisconnectFieldInput>;
  update?: InputMaybe<LeadsClientHasUpdateConnectionInput>;
  where?: InputMaybe<LeadsClientHasConnectionWhere>;
};

export type LeadsConnectInput = {
  adminHas?: InputMaybe<LeadsAdminHasConnectFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasConnectFieldInput>;
  vendorHas?: InputMaybe<LeadsVendorHasConnectFieldInput>;
};

export type LeadsConnectOrCreateInput = {
  adminHas?: InputMaybe<LeadsAdminHasConnectOrCreateFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasConnectOrCreateFieldInput>;
  vendorHas?: InputMaybe<LeadsVendorHasConnectOrCreateFieldInput>;
};

export type LeadsConnectOrCreateWhere = {
  node: LeadsUniqueWhere;
};

export type LeadsConnectWhere = {
  node: LeadsWhere;
};

export type LeadsConnection = {
  __typename?: 'LeadsConnection';
  edges: Array<LeadsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LeadsCreateInput = {
  adminHas?: InputMaybe<LeadsAdminHasFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasFieldInput>;
  condition?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  vendorAddress?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<LeadsVendorHasFieldInput>;
};

export type LeadsDeleteInput = {
  adminHas?: InputMaybe<LeadsAdminHasDeleteFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasDeleteFieldInput>;
  vendorHas?: InputMaybe<LeadsVendorHasDeleteFieldInput>;
};

export type LeadsDisconnectInput = {
  adminHas?: InputMaybe<LeadsAdminHasDisconnectFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasDisconnectFieldInput>;
  vendorHas?: InputMaybe<LeadsVendorHasDisconnectFieldInput>;
};

export type LeadsEdge = {
  __typename?: 'LeadsEdge';
  cursor: Scalars['String']['output'];
  node: Leads;
};

export type LeadsOnCreateInput = {
  condition?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  vendorAddress?: InputMaybe<Scalars['String']['input']>;
};

export type LeadsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more LeadsSort objects to sort Leads by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LeadsSort>>;
};

export type LeadsRelationInput = {
  adminHas?: InputMaybe<LeadsAdminHasCreateFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasCreateFieldInput>;
  vendorHas?: InputMaybe<LeadsVendorHasCreateFieldInput>;
};

/** Fields to sort Leads by. The order in which sorts are applied is not guaranteed when specifying many fields in one LeadsSort object. */
export type LeadsSort = {
  condition?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  duration?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  gstNumber?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  industry?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  phone?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  vendorAddress?: InputMaybe<SortDirection>;
};

export type LeadsUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LeadsUpdateInput = {
  adminHas?: InputMaybe<LeadsAdminHasUpdateFieldInput>;
  clientHas?: InputMaybe<LeadsClientHasUpdateFieldInput>;
  condition?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  price_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  vendorAddress?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<LeadsVendorHasUpdateFieldInput>;
};

export type LeadsVendorHasAggregateInput = {
  AND?: InputMaybe<Array<LeadsVendorHasAggregateInput>>;
  NOT?: InputMaybe<LeadsVendorHasAggregateInput>;
  OR?: InputMaybe<Array<LeadsVendorHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<LeadsVendorHasNodeAggregationWhereInput>;
};

export type LeadsVendorHasConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type LeadsVendorHasConnectOrCreateFieldInput = {
  onCreate: LeadsVendorHasConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type LeadsVendorHasConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type LeadsVendorHasConnection = {
  __typename?: 'LeadsVendorHasConnection';
  edges: Array<LeadsVendorHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LeadsVendorHasConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type LeadsVendorHasConnectionWhere = {
  AND?: InputMaybe<Array<LeadsVendorHasConnectionWhere>>;
  NOT?: InputMaybe<LeadsVendorHasConnectionWhere>;
  OR?: InputMaybe<Array<LeadsVendorHasConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type LeadsVendorHasCreateFieldInput = {
  node: VendorCreateInput;
};

export type LeadsVendorHasDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<LeadsVendorHasConnectionWhere>;
};

export type LeadsVendorHasDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<LeadsVendorHasConnectionWhere>;
};

export type LeadsVendorHasFieldInput = {
  connect?: InputMaybe<LeadsVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<LeadsVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<LeadsVendorHasCreateFieldInput>;
};

export type LeadsVendorHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LeadsVendorHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LeadsVendorHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LeadsVendorHasNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type LeadsVendorHasRelationship = {
  __typename?: 'LeadsVendorHasRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type LeadsVendorHasUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type LeadsVendorHasUpdateFieldInput = {
  connect?: InputMaybe<LeadsVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<LeadsVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<LeadsVendorHasCreateFieldInput>;
  delete?: InputMaybe<LeadsVendorHasDeleteFieldInput>;
  disconnect?: InputMaybe<LeadsVendorHasDisconnectFieldInput>;
  update?: InputMaybe<LeadsVendorHasUpdateConnectionInput>;
  where?: InputMaybe<LeadsVendorHasConnectionWhere>;
};

export type LeadsVendorVendorHasAggregationSelection = {
  __typename?: 'LeadsVendorVendorHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<LeadsVendorVendorHasNodeAggregateSelection>;
};

export type LeadsVendorVendorHasNodeAggregateSelection = {
  __typename?: 'LeadsVendorVendorHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type LeadsWhere = {
  AND?: InputMaybe<Array<LeadsWhere>>;
  NOT?: InputMaybe<LeadsWhere>;
  OR?: InputMaybe<Array<LeadsWhere>>;
  adminHas?: InputMaybe<AdminWhere>;
  adminHasAggregate?: InputMaybe<LeadsAdminHasAggregateInput>;
  adminHasConnection?: InputMaybe<LeadsAdminHasConnectionWhere>;
  adminHasConnection_NOT?: InputMaybe<LeadsAdminHasConnectionWhere>;
  adminHas_NOT?: InputMaybe<AdminWhere>;
  clientHas?: InputMaybe<ClientWhere>;
  clientHasAggregate?: InputMaybe<LeadsClientHasAggregateInput>;
  clientHasConnection?: InputMaybe<LeadsClientHasConnectionWhere>;
  clientHasConnection_NOT?: InputMaybe<LeadsClientHasConnectionWhere>;
  clientHas_NOT?: InputMaybe<ClientWhere>;
  condition?: InputMaybe<Scalars['String']['input']>;
  condition_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  condition_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  condition_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  condition_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  createdAt_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  createdAt_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  duration_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  duration_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  duration_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  duration_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  gstNumber_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  gstNumber_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  gstNumber_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gstNumber_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  industry_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  industry_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  industry_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  industry_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  phone_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  phone_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_GT?: InputMaybe<Scalars['Int']['input']>;
  price_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  price_LT?: InputMaybe<Scalars['Int']['input']>;
  price_LTE?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  status_IN?: InputMaybe<Array<InputMaybe<Status>>>;
  vendorAddress?: InputMaybe<Scalars['String']['input']>;
  vendorAddress_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  vendorAddress_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  vendorAddress_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vendorAddress_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<VendorWhere>;
  vendorHasAggregate?: InputMaybe<LeadsVendorHasAggregateInput>;
  vendorHasConnection?: InputMaybe<LeadsVendorHasConnectionWhere>;
  vendorHasConnection_NOT?: InputMaybe<LeadsVendorHasConnectionWhere>;
  vendorHas_NOT?: InputMaybe<VendorWhere>;
};

export type Management = {
  __typename?: 'Management';
  id: Scalars['String']['output'];
  moduelid: Scalars['String']['output'];
  moduleTitle: Scalars['String']['output'];
  reports?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sentReportsModuleticket?: Maybe<ModuleTicket>;
  sentReportsModuleticketAggregate?: Maybe<ManagementModuleTicketSentReportsModuleticketAggregationSelection>;
  sentReportsModuleticketConnection: ManagementSentReportsModuleticketConnection;
  vendorHas?: Maybe<Vendor>;
  vendorHasAggregate?: Maybe<ManagementVendorVendorHasAggregationSelection>;
  vendorHasConnection: ManagementVendorHasConnection;
};


export type ManagementSentReportsModuleticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ManagementSentReportsModuleticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ManagementSentReportsModuleticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ManagementSentReportsModuleticketConnectionSort>>;
  where?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
};


export type ManagementVendorHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type ManagementVendorHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type ManagementVendorHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ManagementVendorHasConnectionSort>>;
  where?: InputMaybe<ManagementVendorHasConnectionWhere>;
};

export type ManagementAggregateSelection = {
  __typename?: 'ManagementAggregateSelection';
  count: Scalars['Int']['output'];
  id: StringAggregateSelectionNonNullable;
  moduelid: StringAggregateSelectionNonNullable;
  moduleTitle: StringAggregateSelectionNonNullable;
};

export type ManagementConnectInput = {
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketConnectFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasConnectFieldInput>;
};

export type ManagementConnectOrCreateInput = {
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketConnectOrCreateFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasConnectOrCreateFieldInput>;
};

export type ManagementConnectWhere = {
  node: ManagementWhere;
};

export type ManagementCreateInput = {
  id: Scalars['String']['input'];
  moduelid: Scalars['String']['input'];
  moduleTitle: Scalars['String']['input'];
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasFieldInput>;
};

export type ManagementDeleteInput = {
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketDeleteFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasDeleteFieldInput>;
};

export type ManagementDisconnectInput = {
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketDisconnectFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasDisconnectFieldInput>;
};

export type ManagementEdge = {
  __typename?: 'ManagementEdge';
  cursor: Scalars['String']['output'];
  node: Management;
};

export type ManagementModuleTicketSentReportsModuleticketAggregationSelection = {
  __typename?: 'ManagementModuleTicketSentReportsModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ManagementModuleTicketSentReportsModuleticketNodeAggregateSelection>;
};

export type ManagementModuleTicketSentReportsModuleticketNodeAggregateSelection = {
  __typename?: 'ManagementModuleTicketSentReportsModuleticketNodeAggregateSelection';
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type ManagementOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ManagementSort objects to sort Managements by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ManagementSort>>;
};

export type ManagementRelationInput = {
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketCreateFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasCreateFieldInput>;
};

export type ManagementSentReportsModuleticketAggregateInput = {
  AND?: InputMaybe<Array<ManagementSentReportsModuleticketAggregateInput>>;
  NOT?: InputMaybe<ManagementSentReportsModuleticketAggregateInput>;
  OR?: InputMaybe<Array<ManagementSentReportsModuleticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ManagementSentReportsModuleticketNodeAggregationWhereInput>;
};

export type ManagementSentReportsModuleticketConnectFieldInput = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleTicketConnectWhere>;
};

export type ManagementSentReportsModuleticketConnectOrCreateFieldInput = {
  onCreate: ManagementSentReportsModuleticketConnectOrCreateFieldInputOnCreate;
  where: ModuleTicketConnectOrCreateWhere;
};

export type ManagementSentReportsModuleticketConnectOrCreateFieldInputOnCreate = {
  node: ModuleTicketOnCreateInput;
};

export type ManagementSentReportsModuleticketConnection = {
  __typename?: 'ManagementSentReportsModuleticketConnection';
  edges: Array<ManagementSentReportsModuleticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ManagementSentReportsModuleticketConnectionSort = {
  node?: InputMaybe<ModuleTicketSort>;
};

export type ManagementSentReportsModuleticketConnectionWhere = {
  AND?: InputMaybe<Array<ManagementSentReportsModuleticketConnectionWhere>>;
  NOT?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
  OR?: InputMaybe<Array<ManagementSentReportsModuleticketConnectionWhere>>;
  node?: InputMaybe<ModuleTicketWhere>;
};

export type ManagementSentReportsModuleticketCreateFieldInput = {
  node: ModuleTicketCreateInput;
};

export type ManagementSentReportsModuleticketDeleteFieldInput = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
};

export type ManagementSentReportsModuleticketDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  where?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
};

export type ManagementSentReportsModuleticketFieldInput = {
  connect?: InputMaybe<ManagementSentReportsModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ManagementSentReportsModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ManagementSentReportsModuleticketCreateFieldInput>;
};

export type ManagementSentReportsModuleticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ManagementSentReportsModuleticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ManagementSentReportsModuleticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ManagementSentReportsModuleticketNodeAggregationWhereInput>>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ManagementSentReportsModuleticketRelationship = {
  __typename?: 'ManagementSentReportsModuleticketRelationship';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type ManagementSentReportsModuleticketUpdateConnectionInput = {
  node?: InputMaybe<ModuleTicketUpdateInput>;
};

export type ManagementSentReportsModuleticketUpdateFieldInput = {
  connect?: InputMaybe<ManagementSentReportsModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ManagementSentReportsModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ManagementSentReportsModuleticketCreateFieldInput>;
  delete?: InputMaybe<ManagementSentReportsModuleticketDeleteFieldInput>;
  disconnect?: InputMaybe<ManagementSentReportsModuleticketDisconnectFieldInput>;
  update?: InputMaybe<ManagementSentReportsModuleticketUpdateConnectionInput>;
  where?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
};

/** Fields to sort Managements by. The order in which sorts are applied is not guaranteed when specifying many fields in one ManagementSort object. */
export type ManagementSort = {
  id?: InputMaybe<SortDirection>;
  moduelid?: InputMaybe<SortDirection>;
  moduleTitle?: InputMaybe<SortDirection>;
};

export type ManagementUpdateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  moduelid?: InputMaybe<Scalars['String']['input']>;
  moduleTitle?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reports_POP?: InputMaybe<Scalars['Int']['input']>;
  reports_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sentReportsModuleticket?: InputMaybe<ManagementSentReportsModuleticketUpdateFieldInput>;
  vendorHas?: InputMaybe<ManagementVendorHasUpdateFieldInput>;
};

export type ManagementVendorHasAggregateInput = {
  AND?: InputMaybe<Array<ManagementVendorHasAggregateInput>>;
  NOT?: InputMaybe<ManagementVendorHasAggregateInput>;
  OR?: InputMaybe<Array<ManagementVendorHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ManagementVendorHasNodeAggregationWhereInput>;
};

export type ManagementVendorHasConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type ManagementVendorHasConnectOrCreateFieldInput = {
  onCreate: ManagementVendorHasConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type ManagementVendorHasConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type ManagementVendorHasConnection = {
  __typename?: 'ManagementVendorHasConnection';
  edges: Array<ManagementVendorHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ManagementVendorHasConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type ManagementVendorHasConnectionWhere = {
  AND?: InputMaybe<Array<ManagementVendorHasConnectionWhere>>;
  NOT?: InputMaybe<ManagementVendorHasConnectionWhere>;
  OR?: InputMaybe<Array<ManagementVendorHasConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type ManagementVendorHasCreateFieldInput = {
  node: VendorCreateInput;
};

export type ManagementVendorHasDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<ManagementVendorHasConnectionWhere>;
};

export type ManagementVendorHasDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<ManagementVendorHasConnectionWhere>;
};

export type ManagementVendorHasFieldInput = {
  connect?: InputMaybe<ManagementVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ManagementVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ManagementVendorHasCreateFieldInput>;
};

export type ManagementVendorHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ManagementVendorHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ManagementVendorHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ManagementVendorHasNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ManagementVendorHasRelationship = {
  __typename?: 'ManagementVendorHasRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type ManagementVendorHasUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type ManagementVendorHasUpdateFieldInput = {
  connect?: InputMaybe<ManagementVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ManagementVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ManagementVendorHasCreateFieldInput>;
  delete?: InputMaybe<ManagementVendorHasDeleteFieldInput>;
  disconnect?: InputMaybe<ManagementVendorHasDisconnectFieldInput>;
  update?: InputMaybe<ManagementVendorHasUpdateConnectionInput>;
  where?: InputMaybe<ManagementVendorHasConnectionWhere>;
};

export type ManagementVendorVendorHasAggregationSelection = {
  __typename?: 'ManagementVendorVendorHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ManagementVendorVendorHasNodeAggregateSelection>;
};

export type ManagementVendorVendorHasNodeAggregateSelection = {
  __typename?: 'ManagementVendorVendorHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ManagementWhere = {
  AND?: InputMaybe<Array<ManagementWhere>>;
  NOT?: InputMaybe<ManagementWhere>;
  OR?: InputMaybe<Array<ManagementWhere>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  moduelid?: InputMaybe<Scalars['String']['input']>;
  moduelid_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  moduelid_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  moduelid_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  moduelid_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  moduleTitle?: InputMaybe<Scalars['String']['input']>;
  moduleTitle_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  moduleTitle_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  moduleTitle_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  moduleTitle_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reports_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  sentReportsModuleticket?: InputMaybe<ModuleTicketWhere>;
  sentReportsModuleticketAggregate?: InputMaybe<ManagementSentReportsModuleticketAggregateInput>;
  sentReportsModuleticketConnection?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
  sentReportsModuleticketConnection_NOT?: InputMaybe<ManagementSentReportsModuleticketConnectionWhere>;
  sentReportsModuleticket_NOT?: InputMaybe<ModuleTicketWhere>;
  vendorHas?: InputMaybe<VendorWhere>;
  vendorHasAggregate?: InputMaybe<ManagementVendorHasAggregateInput>;
  vendorHasConnection?: InputMaybe<ManagementVendorHasConnectionWhere>;
  vendorHasConnection_NOT?: InputMaybe<ManagementVendorHasConnectionWhere>;
  vendorHas_NOT?: InputMaybe<VendorWhere>;
};

export type ManagementsConnection = {
  __typename?: 'ManagementsConnection';
  edges: Array<ManagementEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Module = {
  __typename?: 'Module';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hasDocuments?: Maybe<Documents>;
  hasDocumentsAggregate?: Maybe<ModuleDocumentsHasDocumentsAggregationSelection>;
  hasDocumentsConnection: ModuleHasDocumentsConnection;
  id: Scalars['ID']['output'];
  moduleticketFor?: Maybe<ModuleTicket>;
  moduleticketForAggregate?: Maybe<ModuleModuleTicketModuleticketForAggregationSelection>;
  moduleticketForConnection: ModuleModuleticketForConnection;
  projectHas?: Maybe<Project>;
  projectHasAggregate?: Maybe<ModuleProjectProjectHasAggregationSelection>;
  projectHasConnection: ModuleProjectHasConnection;
  sampleStatus?: Maybe<SampleStatus>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ModuleHasDocumentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DocumentsOptions>;
  where?: InputMaybe<DocumentsWhere>;
};


export type ModuleHasDocumentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocumentsWhere>;
};


export type ModuleHasDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleHasDocumentsConnectionSort>>;
  where?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
};


export type ModuleModuleticketForArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ModuleModuleticketForAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ModuleModuleticketForConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleModuleticketForConnectionSort>>;
  where?: InputMaybe<ModuleModuleticketForConnectionWhere>;
};


export type ModuleProjectHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ModuleProjectHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ModuleProjectHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleProjectHasConnectionSort>>;
  where?: InputMaybe<ModuleProjectHasConnectionWhere>;
};

export type ModuleAggregateSelection = {
  __typename?: 'ModuleAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ModuleConnectInput = {
  hasDocuments?: InputMaybe<ModuleHasDocumentsConnectFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForConnectFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasConnectFieldInput>;
};

export type ModuleConnectOrCreateInput = {
  moduleticketFor?: InputMaybe<ModuleModuleticketForConnectOrCreateFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasConnectOrCreateFieldInput>;
};

export type ModuleConnectOrCreateWhere = {
  node: ModuleUniqueWhere;
};

export type ModuleConnectWhere = {
  node: ModuleWhere;
};

export type ModuleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<ModuleHasDocumentsFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasFieldInput>;
  sampleStatus?: InputMaybe<SampleStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ModuleDeleteInput = {
  hasDocuments?: InputMaybe<ModuleHasDocumentsDeleteFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForDeleteFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasDeleteFieldInput>;
};

export type ModuleDisconnectInput = {
  hasDocuments?: InputMaybe<ModuleHasDocumentsDisconnectFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForDisconnectFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasDisconnectFieldInput>;
};

export type ModuleDocumentsHasDocumentsAggregationSelection = {
  __typename?: 'ModuleDocumentsHasDocumentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleDocumentsHasDocumentsNodeAggregateSelection>;
};

export type ModuleDocumentsHasDocumentsNodeAggregateSelection = {
  __typename?: 'ModuleDocumentsHasDocumentsNodeAggregateSelection';
  id: StringAggregateSelectionNullable;
};

export type ModuleEdge = {
  __typename?: 'ModuleEdge';
  cursor: Scalars['String']['output'];
  node: Module;
};

export type ModuleHasDocumentsAggregateInput = {
  AND?: InputMaybe<Array<ModuleHasDocumentsAggregateInput>>;
  NOT?: InputMaybe<ModuleHasDocumentsAggregateInput>;
  OR?: InputMaybe<Array<ModuleHasDocumentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleHasDocumentsNodeAggregationWhereInput>;
};

export type ModuleHasDocumentsConnectFieldInput = {
  connect?: InputMaybe<DocumentsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DocumentsConnectWhere>;
};

export type ModuleHasDocumentsConnection = {
  __typename?: 'ModuleHasDocumentsConnection';
  edges: Array<ModuleHasDocumentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleHasDocumentsConnectionSort = {
  node?: InputMaybe<DocumentsSort>;
};

export type ModuleHasDocumentsConnectionWhere = {
  AND?: InputMaybe<Array<ModuleHasDocumentsConnectionWhere>>;
  NOT?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
  OR?: InputMaybe<Array<ModuleHasDocumentsConnectionWhere>>;
  node?: InputMaybe<DocumentsWhere>;
};

export type ModuleHasDocumentsCreateFieldInput = {
  node: DocumentsCreateInput;
};

export type ModuleHasDocumentsDeleteFieldInput = {
  delete?: InputMaybe<DocumentsDeleteInput>;
  where?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
};

export type ModuleHasDocumentsDisconnectFieldInput = {
  disconnect?: InputMaybe<DocumentsDisconnectInput>;
  where?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
};

export type ModuleHasDocumentsFieldInput = {
  connect?: InputMaybe<ModuleHasDocumentsConnectFieldInput>;
  create?: InputMaybe<ModuleHasDocumentsCreateFieldInput>;
};

export type ModuleHasDocumentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleHasDocumentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleHasDocumentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleHasDocumentsNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleHasDocumentsRelationship = {
  __typename?: 'ModuleHasDocumentsRelationship';
  cursor: Scalars['String']['output'];
  node: Documents;
};

export type ModuleHasDocumentsUpdateConnectionInput = {
  node?: InputMaybe<DocumentsUpdateInput>;
};

export type ModuleHasDocumentsUpdateFieldInput = {
  connect?: InputMaybe<ModuleHasDocumentsConnectFieldInput>;
  create?: InputMaybe<ModuleHasDocumentsCreateFieldInput>;
  delete?: InputMaybe<ModuleHasDocumentsDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleHasDocumentsDisconnectFieldInput>;
  update?: InputMaybe<ModuleHasDocumentsUpdateConnectionInput>;
  where?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
};

export type ModuleModuleTicketModuleticketForAggregationSelection = {
  __typename?: 'ModuleModuleTicketModuleticketForAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleModuleTicketModuleticketForNodeAggregateSelection>;
};

export type ModuleModuleTicketModuleticketForNodeAggregateSelection = {
  __typename?: 'ModuleModuleTicketModuleticketForNodeAggregateSelection';
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type ModuleModuleticketForAggregateInput = {
  AND?: InputMaybe<Array<ModuleModuleticketForAggregateInput>>;
  NOT?: InputMaybe<ModuleModuleticketForAggregateInput>;
  OR?: InputMaybe<Array<ModuleModuleticketForAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleModuleticketForNodeAggregationWhereInput>;
};

export type ModuleModuleticketForConnectFieldInput = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleTicketConnectWhere>;
};

export type ModuleModuleticketForConnectOrCreateFieldInput = {
  onCreate: ModuleModuleticketForConnectOrCreateFieldInputOnCreate;
  where: ModuleTicketConnectOrCreateWhere;
};

export type ModuleModuleticketForConnectOrCreateFieldInputOnCreate = {
  node: ModuleTicketOnCreateInput;
};

export type ModuleModuleticketForConnection = {
  __typename?: 'ModuleModuleticketForConnection';
  edges: Array<ModuleModuleticketForRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleModuleticketForConnectionSort = {
  node?: InputMaybe<ModuleTicketSort>;
};

export type ModuleModuleticketForConnectionWhere = {
  AND?: InputMaybe<Array<ModuleModuleticketForConnectionWhere>>;
  NOT?: InputMaybe<ModuleModuleticketForConnectionWhere>;
  OR?: InputMaybe<Array<ModuleModuleticketForConnectionWhere>>;
  node?: InputMaybe<ModuleTicketWhere>;
};

export type ModuleModuleticketForCreateFieldInput = {
  node: ModuleTicketCreateInput;
};

export type ModuleModuleticketForDeleteFieldInput = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<ModuleModuleticketForConnectionWhere>;
};

export type ModuleModuleticketForDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  where?: InputMaybe<ModuleModuleticketForConnectionWhere>;
};

export type ModuleModuleticketForFieldInput = {
  connect?: InputMaybe<ModuleModuleticketForConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleModuleticketForConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleModuleticketForCreateFieldInput>;
};

export type ModuleModuleticketForNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleModuleticketForNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleModuleticketForNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleModuleticketForNodeAggregationWhereInput>>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleModuleticketForRelationship = {
  __typename?: 'ModuleModuleticketForRelationship';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type ModuleModuleticketForUpdateConnectionInput = {
  node?: InputMaybe<ModuleTicketUpdateInput>;
};

export type ModuleModuleticketForUpdateFieldInput = {
  connect?: InputMaybe<ModuleModuleticketForConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleModuleticketForConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleModuleticketForCreateFieldInput>;
  delete?: InputMaybe<ModuleModuleticketForDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleModuleticketForDisconnectFieldInput>;
  update?: InputMaybe<ModuleModuleticketForUpdateConnectionInput>;
  where?: InputMaybe<ModuleModuleticketForConnectionWhere>;
};

export type ModuleOnCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  sampleStatus?: InputMaybe<SampleStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ModuleOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ModuleSort objects to sort Modules by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ModuleSort>>;
};

export type ModuleProjectHasAggregateInput = {
  AND?: InputMaybe<Array<ModuleProjectHasAggregateInput>>;
  NOT?: InputMaybe<ModuleProjectHasAggregateInput>;
  OR?: InputMaybe<Array<ModuleProjectHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleProjectHasNodeAggregationWhereInput>;
};

export type ModuleProjectHasConnectFieldInput = {
  connect?: InputMaybe<ProjectConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ModuleProjectHasConnectOrCreateFieldInput = {
  onCreate: ModuleProjectHasConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ModuleProjectHasConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type ModuleProjectHasConnection = {
  __typename?: 'ModuleProjectHasConnection';
  edges: Array<ModuleProjectHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleProjectHasConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type ModuleProjectHasConnectionWhere = {
  AND?: InputMaybe<Array<ModuleProjectHasConnectionWhere>>;
  NOT?: InputMaybe<ModuleProjectHasConnectionWhere>;
  OR?: InputMaybe<Array<ModuleProjectHasConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type ModuleProjectHasCreateFieldInput = {
  node: ProjectCreateInput;
};

export type ModuleProjectHasDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ModuleProjectHasConnectionWhere>;
};

export type ModuleProjectHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ModuleProjectHasConnectionWhere>;
};

export type ModuleProjectHasFieldInput = {
  connect?: InputMaybe<ModuleProjectHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleProjectHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleProjectHasCreateFieldInput>;
};

export type ModuleProjectHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleProjectHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleProjectHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleProjectHasNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  country_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gst_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleProjectHasRelationship = {
  __typename?: 'ModuleProjectHasRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ModuleProjectHasUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ModuleProjectHasUpdateFieldInput = {
  connect?: InputMaybe<ModuleProjectHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleProjectHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleProjectHasCreateFieldInput>;
  delete?: InputMaybe<ModuleProjectHasDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleProjectHasDisconnectFieldInput>;
  update?: InputMaybe<ModuleProjectHasUpdateConnectionInput>;
  where?: InputMaybe<ModuleProjectHasConnectionWhere>;
};

export type ModuleProjectProjectHasAggregationSelection = {
  __typename?: 'ModuleProjectProjectHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleProjectProjectHasNodeAggregateSelection>;
};

export type ModuleProjectProjectHasNodeAggregateSelection = {
  __typename?: 'ModuleProjectProjectHasNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  country: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ModuleRelationInput = {
  hasDocuments?: InputMaybe<ModuleHasDocumentsCreateFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForCreateFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasCreateFieldInput>;
};

/** Fields to sort Modules by. The order in which sorts are applied is not guaranteed when specifying many fields in one ModuleSort object. */
export type ModuleSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  sampleStatus?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type ModuleTicket = {
  __typename?: 'ModuleTicket';
  clientHas?: Maybe<Client>;
  clientHasAggregate?: Maybe<ModuleTicketClientClientHasAggregationSelection>;
  clientHasConnection: ModuleTicketClientHasConnection;
  complain?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  forModule?: Maybe<Module>;
  forModuleAggregate?: Maybe<ModuleTicketModuleForModuleAggregationSelection>;
  forModuleConnection: ModuleTicketForModuleConnection;
  id: Scalars['ID']['output'];
  managementSentReports?: Maybe<Management>;
  managementSentReportsAggregate?: Maybe<ModuleTicketManagementManagementSentReportsAggregationSelection>;
  managementSentReportsConnection: ModuleTicketManagementSentReportsConnection;
  projectticketHas?: Maybe<ProjectTicket>;
  projectticketHasAggregate?: Maybe<ModuleTicketProjectTicketProjectticketHasAggregationSelection>;
  projectticketHasConnection: ModuleTicketProjectticketHasConnection;
  reports?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Status>;
  ticket: Scalars['String']['output'];
  userHas?: Maybe<User>;
  userHasAggregate?: Maybe<ModuleTicketUserUserHasAggregationSelection>;
  userHasConnection: ModuleTicketUserHasConnection;
  vendorHas?: Maybe<Vendor>;
  vendorHasAggregate?: Maybe<ModuleTicketVendorVendorHasAggregationSelection>;
  vendorHasConnection: ModuleTicketVendorHasConnection;
};


export type ModuleTicketClientHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type ModuleTicketClientHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type ModuleTicketClientHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleTicketClientHasConnectionSort>>;
  where?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
};


export type ModuleTicketForModuleArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleOptions>;
  where?: InputMaybe<ModuleWhere>;
};


export type ModuleTicketForModuleAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleWhere>;
};


export type ModuleTicketForModuleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleTicketForModuleConnectionSort>>;
  where?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
};


export type ModuleTicketManagementSentReportsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ManagementOptions>;
  where?: InputMaybe<ManagementWhere>;
};


export type ModuleTicketManagementSentReportsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ManagementWhere>;
};


export type ModuleTicketManagementSentReportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleTicketManagementSentReportsConnectionSort>>;
  where?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
};


export type ModuleTicketProjectticketHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectTicketOptions>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type ModuleTicketProjectticketHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type ModuleTicketProjectticketHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleTicketProjectticketHasConnectionSort>>;
  where?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
};


export type ModuleTicketUserHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type ModuleTicketUserHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type ModuleTicketUserHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleTicketUserHasConnectionSort>>;
  where?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
};


export type ModuleTicketVendorHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type ModuleTicketVendorHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type ModuleTicketVendorHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ModuleTicketVendorHasConnectionSort>>;
  where?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
};

export type ModuleTicketAggregateSelection = {
  __typename?: 'ModuleTicketAggregateSelection';
  complain: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type ModuleTicketClientClientHasAggregationSelection = {
  __typename?: 'ModuleTicketClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketClientClientHasNodeAggregateSelection>;
};

export type ModuleTicketClientClientHasNodeAggregateSelection = {
  __typename?: 'ModuleTicketClientClientHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ModuleTicketClientHasAggregateInput = {
  AND?: InputMaybe<Array<ModuleTicketClientHasAggregateInput>>;
  NOT?: InputMaybe<ModuleTicketClientHasAggregateInput>;
  OR?: InputMaybe<Array<ModuleTicketClientHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleTicketClientHasNodeAggregationWhereInput>;
};

export type ModuleTicketClientHasConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type ModuleTicketClientHasConnectOrCreateFieldInput = {
  onCreate: ModuleTicketClientHasConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type ModuleTicketClientHasConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type ModuleTicketClientHasConnection = {
  __typename?: 'ModuleTicketClientHasConnection';
  edges: Array<ModuleTicketClientHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleTicketClientHasConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type ModuleTicketClientHasConnectionWhere = {
  AND?: InputMaybe<Array<ModuleTicketClientHasConnectionWhere>>;
  NOT?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
  OR?: InputMaybe<Array<ModuleTicketClientHasConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type ModuleTicketClientHasCreateFieldInput = {
  node: ClientCreateInput;
};

export type ModuleTicketClientHasDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
};

export type ModuleTicketClientHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
};

export type ModuleTicketClientHasFieldInput = {
  connect?: InputMaybe<ModuleTicketClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketClientHasCreateFieldInput>;
};

export type ModuleTicketClientHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleTicketClientHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleTicketClientHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleTicketClientHasNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleTicketClientHasRelationship = {
  __typename?: 'ModuleTicketClientHasRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type ModuleTicketClientHasUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type ModuleTicketClientHasUpdateFieldInput = {
  connect?: InputMaybe<ModuleTicketClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketClientHasCreateFieldInput>;
  delete?: InputMaybe<ModuleTicketClientHasDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleTicketClientHasDisconnectFieldInput>;
  update?: InputMaybe<ModuleTicketClientHasUpdateConnectionInput>;
  where?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
};

export type ModuleTicketConnectInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasConnectFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleConnectFieldInput>;
  managementSentReports?: InputMaybe<ModuleTicketManagementSentReportsConnectFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasConnectFieldInput>;
  userHas?: InputMaybe<ModuleTicketUserHasConnectFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasConnectFieldInput>;
};

export type ModuleTicketConnectOrCreateInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasConnectOrCreateFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleConnectOrCreateFieldInput>;
  userHas?: InputMaybe<ModuleTicketUserHasConnectOrCreateFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasConnectOrCreateFieldInput>;
};

export type ModuleTicketConnectOrCreateWhere = {
  node: ModuleTicketUniqueWhere;
};

export type ModuleTicketConnectWhere = {
  node: ModuleTicketWhere;
};

export type ModuleTicketCreateInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasFieldInput>;
  complain?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  forModule?: InputMaybe<ModuleTicketForModuleFieldInput>;
  managementSentReports?: InputMaybe<ModuleTicketManagementSentReportsFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasFieldInput>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Status>;
  ticket?: Scalars['String']['input'];
  userHas?: InputMaybe<ModuleTicketUserHasFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasFieldInput>;
};

export type ModuleTicketDeleteInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasDeleteFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleDeleteFieldInput>;
  managementSentReports?: InputMaybe<ModuleTicketManagementSentReportsDeleteFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasDeleteFieldInput>;
  userHas?: InputMaybe<ModuleTicketUserHasDeleteFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasDeleteFieldInput>;
};

export type ModuleTicketDisconnectInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasDisconnectFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleDisconnectFieldInput>;
  managementSentReports?: InputMaybe<ModuleTicketManagementSentReportsDisconnectFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasDisconnectFieldInput>;
  userHas?: InputMaybe<ModuleTicketUserHasDisconnectFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasDisconnectFieldInput>;
};

export type ModuleTicketEdge = {
  __typename?: 'ModuleTicketEdge';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type ModuleTicketForModuleAggregateInput = {
  AND?: InputMaybe<Array<ModuleTicketForModuleAggregateInput>>;
  NOT?: InputMaybe<ModuleTicketForModuleAggregateInput>;
  OR?: InputMaybe<Array<ModuleTicketForModuleAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleTicketForModuleNodeAggregationWhereInput>;
};

export type ModuleTicketForModuleConnectFieldInput = {
  connect?: InputMaybe<ModuleConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleConnectWhere>;
};

export type ModuleTicketForModuleConnectOrCreateFieldInput = {
  onCreate: ModuleTicketForModuleConnectOrCreateFieldInputOnCreate;
  where: ModuleConnectOrCreateWhere;
};

export type ModuleTicketForModuleConnectOrCreateFieldInputOnCreate = {
  node: ModuleOnCreateInput;
};

export type ModuleTicketForModuleConnection = {
  __typename?: 'ModuleTicketForModuleConnection';
  edges: Array<ModuleTicketForModuleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleTicketForModuleConnectionSort = {
  node?: InputMaybe<ModuleSort>;
};

export type ModuleTicketForModuleConnectionWhere = {
  AND?: InputMaybe<Array<ModuleTicketForModuleConnectionWhere>>;
  NOT?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
  OR?: InputMaybe<Array<ModuleTicketForModuleConnectionWhere>>;
  node?: InputMaybe<ModuleWhere>;
};

export type ModuleTicketForModuleCreateFieldInput = {
  node: ModuleCreateInput;
};

export type ModuleTicketForModuleDeleteFieldInput = {
  delete?: InputMaybe<ModuleDeleteInput>;
  where?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
};

export type ModuleTicketForModuleDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleDisconnectInput>;
  where?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
};

export type ModuleTicketForModuleFieldInput = {
  connect?: InputMaybe<ModuleTicketForModuleConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketForModuleConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketForModuleCreateFieldInput>;
};

export type ModuleTicketForModuleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleTicketForModuleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleTicketForModuleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleTicketForModuleNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleTicketForModuleRelationship = {
  __typename?: 'ModuleTicketForModuleRelationship';
  cursor: Scalars['String']['output'];
  node: Module;
};

export type ModuleTicketForModuleUpdateConnectionInput = {
  node?: InputMaybe<ModuleUpdateInput>;
};

export type ModuleTicketForModuleUpdateFieldInput = {
  connect?: InputMaybe<ModuleTicketForModuleConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketForModuleConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketForModuleCreateFieldInput>;
  delete?: InputMaybe<ModuleTicketForModuleDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleTicketForModuleDisconnectFieldInput>;
  update?: InputMaybe<ModuleTicketForModuleUpdateConnectionInput>;
  where?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
};

export type ModuleTicketManagementManagementSentReportsAggregationSelection = {
  __typename?: 'ModuleTicketManagementManagementSentReportsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketManagementManagementSentReportsNodeAggregateSelection>;
};

export type ModuleTicketManagementManagementSentReportsNodeAggregateSelection = {
  __typename?: 'ModuleTicketManagementManagementSentReportsNodeAggregateSelection';
  id: StringAggregateSelectionNonNullable;
  moduelid: StringAggregateSelectionNonNullable;
  moduleTitle: StringAggregateSelectionNonNullable;
};

export type ModuleTicketManagementSentReportsAggregateInput = {
  AND?: InputMaybe<Array<ModuleTicketManagementSentReportsAggregateInput>>;
  NOT?: InputMaybe<ModuleTicketManagementSentReportsAggregateInput>;
  OR?: InputMaybe<Array<ModuleTicketManagementSentReportsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleTicketManagementSentReportsNodeAggregationWhereInput>;
};

export type ModuleTicketManagementSentReportsConnectFieldInput = {
  connect?: InputMaybe<ManagementConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ManagementConnectWhere>;
};

export type ModuleTicketManagementSentReportsConnection = {
  __typename?: 'ModuleTicketManagementSentReportsConnection';
  edges: Array<ModuleTicketManagementSentReportsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleTicketManagementSentReportsConnectionSort = {
  node?: InputMaybe<ManagementSort>;
};

export type ModuleTicketManagementSentReportsConnectionWhere = {
  AND?: InputMaybe<Array<ModuleTicketManagementSentReportsConnectionWhere>>;
  NOT?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
  OR?: InputMaybe<Array<ModuleTicketManagementSentReportsConnectionWhere>>;
  node?: InputMaybe<ManagementWhere>;
};

export type ModuleTicketManagementSentReportsCreateFieldInput = {
  node: ManagementCreateInput;
};

export type ModuleTicketManagementSentReportsDeleteFieldInput = {
  delete?: InputMaybe<ManagementDeleteInput>;
  where?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
};

export type ModuleTicketManagementSentReportsDisconnectFieldInput = {
  disconnect?: InputMaybe<ManagementDisconnectInput>;
  where?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
};

export type ModuleTicketManagementSentReportsFieldInput = {
  connect?: InputMaybe<ModuleTicketManagementSentReportsConnectFieldInput>;
  create?: InputMaybe<ModuleTicketManagementSentReportsCreateFieldInput>;
};

export type ModuleTicketManagementSentReportsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleTicketManagementSentReportsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleTicketManagementSentReportsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleTicketManagementSentReportsNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  moduelid_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleTicketManagementSentReportsRelationship = {
  __typename?: 'ModuleTicketManagementSentReportsRelationship';
  cursor: Scalars['String']['output'];
  node: Management;
};

export type ModuleTicketManagementSentReportsUpdateConnectionInput = {
  node?: InputMaybe<ManagementUpdateInput>;
};

export type ModuleTicketManagementSentReportsUpdateFieldInput = {
  connect?: InputMaybe<ModuleTicketManagementSentReportsConnectFieldInput>;
  create?: InputMaybe<ModuleTicketManagementSentReportsCreateFieldInput>;
  delete?: InputMaybe<ModuleTicketManagementSentReportsDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleTicketManagementSentReportsDisconnectFieldInput>;
  update?: InputMaybe<ModuleTicketManagementSentReportsUpdateConnectionInput>;
  where?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
};

export type ModuleTicketModuleForModuleAggregationSelection = {
  __typename?: 'ModuleTicketModuleForModuleAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketModuleForModuleNodeAggregateSelection>;
};

export type ModuleTicketModuleForModuleNodeAggregateSelection = {
  __typename?: 'ModuleTicketModuleForModuleNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ModuleTicketOnCreateInput = {
  complain?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Status>;
  ticket?: Scalars['String']['input'];
};

export type ModuleTicketOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ModuleTicketSort objects to sort ModuleTickets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ModuleTicketSort>>;
};

export type ModuleTicketProjectTicketProjectticketHasAggregationSelection = {
  __typename?: 'ModuleTicketProjectTicketProjectticketHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketProjectTicketProjectticketHasNodeAggregateSelection>;
};

export type ModuleTicketProjectTicketProjectticketHasNodeAggregateSelection = {
  __typename?: 'ModuleTicketProjectTicketProjectticketHasNodeAggregateSelection';
  projectTicket: StringAggregateSelectionNullable;
};

export type ModuleTicketProjectticketHasAggregateInput = {
  AND?: InputMaybe<Array<ModuleTicketProjectticketHasAggregateInput>>;
  NOT?: InputMaybe<ModuleTicketProjectticketHasAggregateInput>;
  OR?: InputMaybe<Array<ModuleTicketProjectticketHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleTicketProjectticketHasNodeAggregationWhereInput>;
};

export type ModuleTicketProjectticketHasConnectFieldInput = {
  connect?: InputMaybe<ProjectTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectTicketConnectWhere>;
};

export type ModuleTicketProjectticketHasConnection = {
  __typename?: 'ModuleTicketProjectticketHasConnection';
  edges: Array<ModuleTicketProjectticketHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleTicketProjectticketHasConnectionSort = {
  node?: InputMaybe<ProjectTicketSort>;
};

export type ModuleTicketProjectticketHasConnectionWhere = {
  AND?: InputMaybe<Array<ModuleTicketProjectticketHasConnectionWhere>>;
  NOT?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
  OR?: InputMaybe<Array<ModuleTicketProjectticketHasConnectionWhere>>;
  node?: InputMaybe<ProjectTicketWhere>;
};

export type ModuleTicketProjectticketHasCreateFieldInput = {
  node: ProjectTicketCreateInput;
};

export type ModuleTicketProjectticketHasDeleteFieldInput = {
  delete?: InputMaybe<ProjectTicketDeleteInput>;
  where?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
};

export type ModuleTicketProjectticketHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectTicketDisconnectInput>;
  where?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
};

export type ModuleTicketProjectticketHasFieldInput = {
  connect?: InputMaybe<ModuleTicketProjectticketHasConnectFieldInput>;
  create?: InputMaybe<ModuleTicketProjectticketHasCreateFieldInput>;
};

export type ModuleTicketProjectticketHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleTicketProjectticketHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleTicketProjectticketHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleTicketProjectticketHasNodeAggregationWhereInput>>;
  projectTicket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleTicketProjectticketHasRelationship = {
  __typename?: 'ModuleTicketProjectticketHasRelationship';
  cursor: Scalars['String']['output'];
  node: ProjectTicket;
};

export type ModuleTicketProjectticketHasUpdateConnectionInput = {
  node?: InputMaybe<ProjectTicketUpdateInput>;
};

export type ModuleTicketProjectticketHasUpdateFieldInput = {
  connect?: InputMaybe<ModuleTicketProjectticketHasConnectFieldInput>;
  create?: InputMaybe<ModuleTicketProjectticketHasCreateFieldInput>;
  delete?: InputMaybe<ModuleTicketProjectticketHasDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleTicketProjectticketHasDisconnectFieldInput>;
  update?: InputMaybe<ModuleTicketProjectticketHasUpdateConnectionInput>;
  where?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
};

export type ModuleTicketRelationInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasCreateFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleCreateFieldInput>;
  managementSentReports?: InputMaybe<ModuleTicketManagementSentReportsCreateFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasCreateFieldInput>;
  userHas?: InputMaybe<ModuleTicketUserHasCreateFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasCreateFieldInput>;
};

/** Fields to sort ModuleTickets by. The order in which sorts are applied is not guaranteed when specifying many fields in one ModuleTicketSort object. */
export type ModuleTicketSort = {
  complain?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  ticket?: InputMaybe<SortDirection>;
};

export type ModuleTicketUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ModuleTicketUpdateInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasUpdateFieldInput>;
  complain?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  forModule?: InputMaybe<ModuleTicketForModuleUpdateFieldInput>;
  managementSentReports?: InputMaybe<ModuleTicketManagementSentReportsUpdateFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasUpdateFieldInput>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reports_POP?: InputMaybe<Scalars['Int']['input']>;
  reports_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Status>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  userHas?: InputMaybe<ModuleTicketUserHasUpdateFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasUpdateFieldInput>;
};

export type ModuleTicketUserHasAggregateInput = {
  AND?: InputMaybe<Array<ModuleTicketUserHasAggregateInput>>;
  NOT?: InputMaybe<ModuleTicketUserHasAggregateInput>;
  OR?: InputMaybe<Array<ModuleTicketUserHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleTicketUserHasNodeAggregationWhereInput>;
};

export type ModuleTicketUserHasConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ModuleTicketUserHasConnectOrCreateFieldInput = {
  onCreate: ModuleTicketUserHasConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ModuleTicketUserHasConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ModuleTicketUserHasConnection = {
  __typename?: 'ModuleTicketUserHasConnection';
  edges: Array<ModuleTicketUserHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleTicketUserHasConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type ModuleTicketUserHasConnectionWhere = {
  AND?: InputMaybe<Array<ModuleTicketUserHasConnectionWhere>>;
  NOT?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
  OR?: InputMaybe<Array<ModuleTicketUserHasConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type ModuleTicketUserHasCreateFieldInput = {
  node: UserCreateInput;
};

export type ModuleTicketUserHasDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
};

export type ModuleTicketUserHasDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
};

export type ModuleTicketUserHasFieldInput = {
  connect?: InputMaybe<ModuleTicketUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketUserHasCreateFieldInput>;
};

export type ModuleTicketUserHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleTicketUserHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleTicketUserHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleTicketUserHasNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleTicketUserHasRelationship = {
  __typename?: 'ModuleTicketUserHasRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type ModuleTicketUserHasUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ModuleTicketUserHasUpdateFieldInput = {
  connect?: InputMaybe<ModuleTicketUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketUserHasCreateFieldInput>;
  delete?: InputMaybe<ModuleTicketUserHasDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleTicketUserHasDisconnectFieldInput>;
  update?: InputMaybe<ModuleTicketUserHasUpdateConnectionInput>;
  where?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
};

export type ModuleTicketUserUserHasAggregationSelection = {
  __typename?: 'ModuleTicketUserUserHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketUserUserHasNodeAggregateSelection>;
};

export type ModuleTicketUserUserHasNodeAggregateSelection = {
  __typename?: 'ModuleTicketUserUserHasNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type ModuleTicketVendorHasAggregateInput = {
  AND?: InputMaybe<Array<ModuleTicketVendorHasAggregateInput>>;
  NOT?: InputMaybe<ModuleTicketVendorHasAggregateInput>;
  OR?: InputMaybe<Array<ModuleTicketVendorHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ModuleTicketVendorHasNodeAggregationWhereInput>;
};

export type ModuleTicketVendorHasConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type ModuleTicketVendorHasConnectOrCreateFieldInput = {
  onCreate: ModuleTicketVendorHasConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type ModuleTicketVendorHasConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type ModuleTicketVendorHasConnection = {
  __typename?: 'ModuleTicketVendorHasConnection';
  edges: Array<ModuleTicketVendorHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleTicketVendorHasConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type ModuleTicketVendorHasConnectionWhere = {
  AND?: InputMaybe<Array<ModuleTicketVendorHasConnectionWhere>>;
  NOT?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
  OR?: InputMaybe<Array<ModuleTicketVendorHasConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type ModuleTicketVendorHasCreateFieldInput = {
  node: VendorCreateInput;
};

export type ModuleTicketVendorHasDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
};

export type ModuleTicketVendorHasDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
};

export type ModuleTicketVendorHasFieldInput = {
  connect?: InputMaybe<ModuleTicketVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketVendorHasCreateFieldInput>;
};

export type ModuleTicketVendorHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleTicketVendorHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleTicketVendorHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleTicketVendorHasNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ModuleTicketVendorHasRelationship = {
  __typename?: 'ModuleTicketVendorHasRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type ModuleTicketVendorHasUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type ModuleTicketVendorHasUpdateFieldInput = {
  connect?: InputMaybe<ModuleTicketVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ModuleTicketVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleTicketVendorHasCreateFieldInput>;
  delete?: InputMaybe<ModuleTicketVendorHasDeleteFieldInput>;
  disconnect?: InputMaybe<ModuleTicketVendorHasDisconnectFieldInput>;
  update?: InputMaybe<ModuleTicketVendorHasUpdateConnectionInput>;
  where?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
};

export type ModuleTicketVendorVendorHasAggregationSelection = {
  __typename?: 'ModuleTicketVendorVendorHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketVendorVendorHasNodeAggregateSelection>;
};

export type ModuleTicketVendorVendorHasNodeAggregateSelection = {
  __typename?: 'ModuleTicketVendorVendorHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ModuleTicketWhere = {
  AND?: InputMaybe<Array<ModuleTicketWhere>>;
  NOT?: InputMaybe<ModuleTicketWhere>;
  OR?: InputMaybe<Array<ModuleTicketWhere>>;
  clientHas?: InputMaybe<ClientWhere>;
  clientHasAggregate?: InputMaybe<ModuleTicketClientHasAggregateInput>;
  clientHasConnection?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
  clientHasConnection_NOT?: InputMaybe<ModuleTicketClientHasConnectionWhere>;
  clientHas_NOT?: InputMaybe<ClientWhere>;
  complain?: InputMaybe<Scalars['String']['input']>;
  complain_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  complain_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  complain_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complain_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  forModule?: InputMaybe<ModuleWhere>;
  forModuleAggregate?: InputMaybe<ModuleTicketForModuleAggregateInput>;
  forModuleConnection?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
  forModuleConnection_NOT?: InputMaybe<ModuleTicketForModuleConnectionWhere>;
  forModule_NOT?: InputMaybe<ModuleWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  managementSentReports?: InputMaybe<ManagementWhere>;
  managementSentReportsAggregate?: InputMaybe<ModuleTicketManagementSentReportsAggregateInput>;
  managementSentReportsConnection?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
  managementSentReportsConnection_NOT?: InputMaybe<ModuleTicketManagementSentReportsConnectionWhere>;
  managementSentReports_NOT?: InputMaybe<ManagementWhere>;
  projectticketHas?: InputMaybe<ProjectTicketWhere>;
  projectticketHasAggregate?: InputMaybe<ModuleTicketProjectticketHasAggregateInput>;
  projectticketHasConnection?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
  projectticketHasConnection_NOT?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
  projectticketHas_NOT?: InputMaybe<ProjectTicketWhere>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reports_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  status_IN?: InputMaybe<Array<InputMaybe<Status>>>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticket_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  ticket_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  ticket_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  ticket_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  userHas?: InputMaybe<UserWhere>;
  userHasAggregate?: InputMaybe<ModuleTicketUserHasAggregateInput>;
  userHasConnection?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
  userHasConnection_NOT?: InputMaybe<ModuleTicketUserHasConnectionWhere>;
  userHas_NOT?: InputMaybe<UserWhere>;
  vendorHas?: InputMaybe<VendorWhere>;
  vendorHasAggregate?: InputMaybe<ModuleTicketVendorHasAggregateInput>;
  vendorHasConnection?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
  vendorHasConnection_NOT?: InputMaybe<ModuleTicketVendorHasConnectionWhere>;
  vendorHas_NOT?: InputMaybe<VendorWhere>;
};

export type ModuleTicketsConnection = {
  __typename?: 'ModuleTicketsConnection';
  edges: Array<ModuleTicketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ModuleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ModuleUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<ModuleHasDocumentsUpdateFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForUpdateFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasUpdateFieldInput>;
  sampleStatus?: InputMaybe<SampleStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ModuleWhere = {
  AND?: InputMaybe<Array<ModuleWhere>>;
  NOT?: InputMaybe<ModuleWhere>;
  OR?: InputMaybe<Array<ModuleWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<DocumentsWhere>;
  hasDocumentsAggregate?: InputMaybe<ModuleHasDocumentsAggregateInput>;
  hasDocumentsConnection?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
  hasDocumentsConnection_NOT?: InputMaybe<ModuleHasDocumentsConnectionWhere>;
  hasDocuments_NOT?: InputMaybe<DocumentsWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  moduleticketFor?: InputMaybe<ModuleTicketWhere>;
  moduleticketForAggregate?: InputMaybe<ModuleModuleticketForAggregateInput>;
  moduleticketForConnection?: InputMaybe<ModuleModuleticketForConnectionWhere>;
  moduleticketForConnection_NOT?: InputMaybe<ModuleModuleticketForConnectionWhere>;
  moduleticketFor_NOT?: InputMaybe<ModuleTicketWhere>;
  projectHas?: InputMaybe<ProjectWhere>;
  projectHasAggregate?: InputMaybe<ModuleProjectHasAggregateInput>;
  projectHasConnection?: InputMaybe<ModuleProjectHasConnectionWhere>;
  projectHasConnection_NOT?: InputMaybe<ModuleProjectHasConnectionWhere>;
  projectHas_NOT?: InputMaybe<ProjectWhere>;
  sampleStatus?: InputMaybe<SampleStatus>;
  sampleStatus_IN?: InputMaybe<Array<InputMaybe<SampleStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ModulesConnection = {
  __typename?: 'ModulesConnection';
  edges: Array<ModuleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmins: CreateAdminsMutationResponse;
  createClients: CreateClientsMutationResponse;
  createCommunicationTickets: CreateCommunicationTicketsMutationResponse;
  createCounters: CreateCountersMutationResponse;
  createDocuments: CreateDocumentsMutationResponse;
  createEmployees: CreateEmployeesMutationResponse;
  createFiles: CreateFilesMutationResponse;
  createImages: CreateImagesMutationResponse;
  createInvoices: CreateInvoicesMutationResponse;
  createLeads: CreateLeadsMutationResponse;
  createManagements: CreateManagementsMutationResponse;
  createModuleTickets: CreateModuleTicketsMutationResponse;
  createModules: CreateModulesMutationResponse;
  createNotifications: CreateNotificationsMutationResponse;
  createPages: CreatePagesMutationResponse;
  createProjectTickets: CreateProjectTicketsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createReplies: CreateRepliesMutationResponse;
  createRoles: CreateRolesMutationResponse;
  createServices: CreateServicesMutationResponse;
  createSupportTickets: CreateSupportTicketsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  createVendors: CreateVendorsMutationResponse;
  deleteAdmins: DeleteInfo;
  deleteClients: DeleteInfo;
  deleteCommunicationTickets: DeleteInfo;
  deleteCounters: DeleteInfo;
  deleteDocuments: DeleteInfo;
  deleteEmployees: DeleteInfo;
  deleteFiles: DeleteInfo;
  deleteImages: DeleteInfo;
  deleteInvoices: DeleteInfo;
  deleteLeads: DeleteInfo;
  deleteManagements: DeleteInfo;
  deleteModuleTickets: DeleteInfo;
  deleteModules: DeleteInfo;
  deleteNotifications: DeleteInfo;
  deletePages: DeleteInfo;
  deleteProjectTickets: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteReplies: DeleteInfo;
  deleteRoles: DeleteInfo;
  deleteServices: DeleteInfo;
  deleteSupportTickets: DeleteInfo;
  deleteUsers: DeleteInfo;
  deleteVendors: DeleteInfo;
  signIn: Scalars['String']['output'];
  signUp: Scalars['String']['output'];
  updateAdmins: UpdateAdminsMutationResponse;
  updateClients: UpdateClientsMutationResponse;
  updateCommunicationTickets: UpdateCommunicationTicketsMutationResponse;
  updateCounters: UpdateCountersMutationResponse;
  updateDocuments: UpdateDocumentsMutationResponse;
  updateEmployees: UpdateEmployeesMutationResponse;
  updateFiles: UpdateFilesMutationResponse;
  updateImages: UpdateImagesMutationResponse;
  updateInvoices: UpdateInvoicesMutationResponse;
  updateLeads: UpdateLeadsMutationResponse;
  updateManagements: UpdateManagementsMutationResponse;
  updateModuleTickets: UpdateModuleTicketsMutationResponse;
  updateModules: UpdateModulesMutationResponse;
  updateNotifications: UpdateNotificationsMutationResponse;
  updatePages: UpdatePagesMutationResponse;
  updateProjectTickets: UpdateProjectTicketsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateReplies: UpdateRepliesMutationResponse;
  updateRoles: UpdateRolesMutationResponse;
  updateServices: UpdateServicesMutationResponse;
  updateSupportTickets: UpdateSupportTicketsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
  updateVendors: UpdateVendorsMutationResponse;
};


export type MutationCreateAdminsArgs = {
  input: Array<AdminCreateInput>;
};


export type MutationCreateClientsArgs = {
  input: Array<ClientCreateInput>;
};


export type MutationCreateCommunicationTicketsArgs = {
  input: Array<CommunicationTicketCreateInput>;
};


export type MutationCreateCountersArgs = {
  input: Array<CounterCreateInput>;
};


export type MutationCreateDocumentsArgs = {
  input: Array<DocumentsCreateInput>;
};


export type MutationCreateEmployeesArgs = {
  input: Array<EmployeeCreateInput>;
};


export type MutationCreateFilesArgs = {
  input: Array<FilesCreateInput>;
};


export type MutationCreateImagesArgs = {
  input: Array<ImagesCreateInput>;
};


export type MutationCreateInvoicesArgs = {
  input: Array<InvoiceCreateInput>;
};


export type MutationCreateLeadsArgs = {
  input: Array<LeadsCreateInput>;
};


export type MutationCreateManagementsArgs = {
  input: Array<ManagementCreateInput>;
};


export type MutationCreateModuleTicketsArgs = {
  input: Array<ModuleTicketCreateInput>;
};


export type MutationCreateModulesArgs = {
  input: Array<ModuleCreateInput>;
};


export type MutationCreateNotificationsArgs = {
  input: Array<NotificationCreateInput>;
};


export type MutationCreatePagesArgs = {
  input: Array<PageCreateInput>;
};


export type MutationCreateProjectTicketsArgs = {
  input: Array<ProjectTicketCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationCreateRepliesArgs = {
  input: Array<ReplyCreateInput>;
};


export type MutationCreateRolesArgs = {
  input: Array<RoleCreateInput>;
};


export type MutationCreateServicesArgs = {
  input: Array<ServiceCreateInput>;
};


export type MutationCreateSupportTicketsArgs = {
  input: Array<SupportTicketCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationCreateVendorsArgs = {
  input: Array<VendorCreateInput>;
};


export type MutationDeleteAdminsArgs = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<AdminWhere>;
};


export type MutationDeleteClientsArgs = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<ClientWhere>;
};


export type MutationDeleteCommunicationTicketsArgs = {
  delete?: InputMaybe<CommunicationTicketDeleteInput>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type MutationDeleteCountersArgs = {
  where?: InputMaybe<CounterWhere>;
};


export type MutationDeleteDocumentsArgs = {
  delete?: InputMaybe<DocumentsDeleteInput>;
  where?: InputMaybe<DocumentsWhere>;
};


export type MutationDeleteEmployeesArgs = {
  delete?: InputMaybe<EmployeeDeleteInput>;
  where?: InputMaybe<EmployeeWhere>;
};


export type MutationDeleteFilesArgs = {
  delete?: InputMaybe<FilesDeleteInput>;
  where?: InputMaybe<FilesWhere>;
};


export type MutationDeleteImagesArgs = {
  delete?: InputMaybe<ImagesDeleteInput>;
  where?: InputMaybe<ImagesWhere>;
};


export type MutationDeleteInvoicesArgs = {
  delete?: InputMaybe<InvoiceDeleteInput>;
  where?: InputMaybe<InvoiceWhere>;
};


export type MutationDeleteLeadsArgs = {
  delete?: InputMaybe<LeadsDeleteInput>;
  where?: InputMaybe<LeadsWhere>;
};


export type MutationDeleteManagementsArgs = {
  delete?: InputMaybe<ManagementDeleteInput>;
  where?: InputMaybe<ManagementWhere>;
};


export type MutationDeleteModuleTicketsArgs = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type MutationDeleteModulesArgs = {
  delete?: InputMaybe<ModuleDeleteInput>;
  where?: InputMaybe<ModuleWhere>;
};


export type MutationDeleteNotificationsArgs = {
  delete?: InputMaybe<NotificationDeleteInput>;
  where?: InputMaybe<NotificationWhere>;
};


export type MutationDeletePagesArgs = {
  delete?: InputMaybe<PageDeleteInput>;
  where?: InputMaybe<PageWhere>;
};


export type MutationDeleteProjectTicketsArgs = {
  delete?: InputMaybe<ProjectTicketDeleteInput>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationDeleteRepliesArgs = {
  delete?: InputMaybe<ReplyDeleteInput>;
  where?: InputMaybe<ReplyWhere>;
};


export type MutationDeleteRolesArgs = {
  delete?: InputMaybe<RoleDeleteInput>;
  where?: InputMaybe<RoleWhere>;
};


export type MutationDeleteServicesArgs = {
  delete?: InputMaybe<ServiceDeleteInput>;
  where?: InputMaybe<ServiceWhere>;
};


export type MutationDeleteSupportTicketsArgs = {
  delete?: InputMaybe<SupportTicketDeleteInput>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationDeleteVendorsArgs = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<VendorWhere>;
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user_type: Scalars['String']['input'];
};


export type MutationUpdateAdminsArgs = {
  connect?: InputMaybe<AdminConnectInput>;
  connectOrCreate?: InputMaybe<AdminConnectOrCreateInput>;
  create?: InputMaybe<AdminRelationInput>;
  delete?: InputMaybe<AdminDeleteInput>;
  disconnect?: InputMaybe<AdminDisconnectInput>;
  update?: InputMaybe<AdminUpdateInput>;
  where?: InputMaybe<AdminWhere>;
};


export type MutationUpdateClientsArgs = {
  connect?: InputMaybe<ClientConnectInput>;
  connectOrCreate?: InputMaybe<ClientConnectOrCreateInput>;
  create?: InputMaybe<ClientRelationInput>;
  delete?: InputMaybe<ClientDeleteInput>;
  disconnect?: InputMaybe<ClientDisconnectInput>;
  update?: InputMaybe<ClientUpdateInput>;
  where?: InputMaybe<ClientWhere>;
};


export type MutationUpdateCommunicationTicketsArgs = {
  connect?: InputMaybe<CommunicationTicketConnectInput>;
  connectOrCreate?: InputMaybe<CommunicationTicketConnectOrCreateInput>;
  create?: InputMaybe<CommunicationTicketRelationInput>;
  delete?: InputMaybe<CommunicationTicketDeleteInput>;
  disconnect?: InputMaybe<CommunicationTicketDisconnectInput>;
  update?: InputMaybe<CommunicationTicketUpdateInput>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type MutationUpdateCountersArgs = {
  update?: InputMaybe<CounterUpdateInput>;
  where?: InputMaybe<CounterWhere>;
};


export type MutationUpdateDocumentsArgs = {
  connect?: InputMaybe<DocumentsConnectInput>;
  connectOrCreate?: InputMaybe<DocumentsConnectOrCreateInput>;
  create?: InputMaybe<DocumentsRelationInput>;
  delete?: InputMaybe<DocumentsDeleteInput>;
  disconnect?: InputMaybe<DocumentsDisconnectInput>;
  update?: InputMaybe<DocumentsUpdateInput>;
  where?: InputMaybe<DocumentsWhere>;
};


export type MutationUpdateEmployeesArgs = {
  connect?: InputMaybe<EmployeeConnectInput>;
  connectOrCreate?: InputMaybe<EmployeeConnectOrCreateInput>;
  create?: InputMaybe<EmployeeRelationInput>;
  delete?: InputMaybe<EmployeeDeleteInput>;
  disconnect?: InputMaybe<EmployeeDisconnectInput>;
  update?: InputMaybe<EmployeeUpdateInput>;
  where?: InputMaybe<EmployeeWhere>;
};


export type MutationUpdateFilesArgs = {
  connect?: InputMaybe<FilesConnectInput>;
  create?: InputMaybe<FilesRelationInput>;
  delete?: InputMaybe<FilesDeleteInput>;
  disconnect?: InputMaybe<FilesDisconnectInput>;
  update?: InputMaybe<FilesUpdateInput>;
  where?: InputMaybe<FilesWhere>;
};


export type MutationUpdateImagesArgs = {
  connect?: InputMaybe<ImagesConnectInput>;
  create?: InputMaybe<ImagesRelationInput>;
  delete?: InputMaybe<ImagesDeleteInput>;
  disconnect?: InputMaybe<ImagesDisconnectInput>;
  update?: InputMaybe<ImagesUpdateInput>;
  where?: InputMaybe<ImagesWhere>;
};


export type MutationUpdateInvoicesArgs = {
  connect?: InputMaybe<InvoiceConnectInput>;
  connectOrCreate?: InputMaybe<InvoiceConnectOrCreateInput>;
  create?: InputMaybe<InvoiceRelationInput>;
  delete?: InputMaybe<InvoiceDeleteInput>;
  disconnect?: InputMaybe<InvoiceDisconnectInput>;
  update?: InputMaybe<InvoiceUpdateInput>;
  where?: InputMaybe<InvoiceWhere>;
};


export type MutationUpdateLeadsArgs = {
  connect?: InputMaybe<LeadsConnectInput>;
  connectOrCreate?: InputMaybe<LeadsConnectOrCreateInput>;
  create?: InputMaybe<LeadsRelationInput>;
  delete?: InputMaybe<LeadsDeleteInput>;
  disconnect?: InputMaybe<LeadsDisconnectInput>;
  update?: InputMaybe<LeadsUpdateInput>;
  where?: InputMaybe<LeadsWhere>;
};


export type MutationUpdateManagementsArgs = {
  connect?: InputMaybe<ManagementConnectInput>;
  connectOrCreate?: InputMaybe<ManagementConnectOrCreateInput>;
  create?: InputMaybe<ManagementRelationInput>;
  delete?: InputMaybe<ManagementDeleteInput>;
  disconnect?: InputMaybe<ManagementDisconnectInput>;
  update?: InputMaybe<ManagementUpdateInput>;
  where?: InputMaybe<ManagementWhere>;
};


export type MutationUpdateModuleTicketsArgs = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  connectOrCreate?: InputMaybe<ModuleTicketConnectOrCreateInput>;
  create?: InputMaybe<ModuleTicketRelationInput>;
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  update?: InputMaybe<ModuleTicketUpdateInput>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type MutationUpdateModulesArgs = {
  connect?: InputMaybe<ModuleConnectInput>;
  connectOrCreate?: InputMaybe<ModuleConnectOrCreateInput>;
  create?: InputMaybe<ModuleRelationInput>;
  delete?: InputMaybe<ModuleDeleteInput>;
  disconnect?: InputMaybe<ModuleDisconnectInput>;
  update?: InputMaybe<ModuleUpdateInput>;
  where?: InputMaybe<ModuleWhere>;
};


export type MutationUpdateNotificationsArgs = {
  connect?: InputMaybe<NotificationConnectInput>;
  connectOrCreate?: InputMaybe<NotificationConnectOrCreateInput>;
  create?: InputMaybe<NotificationRelationInput>;
  delete?: InputMaybe<NotificationDeleteInput>;
  disconnect?: InputMaybe<NotificationDisconnectInput>;
  update?: InputMaybe<NotificationUpdateInput>;
  where?: InputMaybe<NotificationWhere>;
};


export type MutationUpdatePagesArgs = {
  connect?: InputMaybe<PageConnectInput>;
  connectOrCreate?: InputMaybe<PageConnectOrCreateInput>;
  create?: InputMaybe<PageRelationInput>;
  delete?: InputMaybe<PageDeleteInput>;
  disconnect?: InputMaybe<PageDisconnectInput>;
  update?: InputMaybe<PageUpdateInput>;
  where?: InputMaybe<PageWhere>;
};


export type MutationUpdateProjectTicketsArgs = {
  connect?: InputMaybe<ProjectTicketConnectInput>;
  connectOrCreate?: InputMaybe<ProjectTicketConnectOrCreateInput>;
  create?: InputMaybe<ProjectTicketRelationInput>;
  delete?: InputMaybe<ProjectTicketDeleteInput>;
  disconnect?: InputMaybe<ProjectTicketDisconnectInput>;
  update?: InputMaybe<ProjectTicketUpdateInput>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type MutationUpdateProjectsArgs = {
  connect?: InputMaybe<ProjectConnectInput>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationUpdateRepliesArgs = {
  connect?: InputMaybe<ReplyConnectInput>;
  connectOrCreate?: InputMaybe<ReplyConnectOrCreateInput>;
  create?: InputMaybe<ReplyRelationInput>;
  delete?: InputMaybe<ReplyDeleteInput>;
  disconnect?: InputMaybe<ReplyDisconnectInput>;
  update?: InputMaybe<ReplyUpdateInput>;
  where?: InputMaybe<ReplyWhere>;
};


export type MutationUpdateRolesArgs = {
  connect?: InputMaybe<RoleConnectInput>;
  connectOrCreate?: InputMaybe<RoleConnectOrCreateInput>;
  create?: InputMaybe<RoleRelationInput>;
  delete?: InputMaybe<RoleDeleteInput>;
  disconnect?: InputMaybe<RoleDisconnectInput>;
  update?: InputMaybe<RoleUpdateInput>;
  where?: InputMaybe<RoleWhere>;
};


export type MutationUpdateServicesArgs = {
  connect?: InputMaybe<ServiceConnectInput>;
  connectOrCreate?: InputMaybe<ServiceConnectOrCreateInput>;
  create?: InputMaybe<ServiceRelationInput>;
  delete?: InputMaybe<ServiceDeleteInput>;
  disconnect?: InputMaybe<ServiceDisconnectInput>;
  update?: InputMaybe<ServiceUpdateInput>;
  where?: InputMaybe<ServiceWhere>;
};


export type MutationUpdateSupportTicketsArgs = {
  connect?: InputMaybe<SupportTicketConnectInput>;
  connectOrCreate?: InputMaybe<SupportTicketConnectOrCreateInput>;
  create?: InputMaybe<SupportTicketRelationInput>;
  delete?: InputMaybe<SupportTicketDeleteInput>;
  disconnect?: InputMaybe<SupportTicketDisconnectInput>;
  update?: InputMaybe<SupportTicketUpdateInput>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateVendorsArgs = {
  connect?: InputMaybe<VendorConnectInput>;
  connectOrCreate?: InputMaybe<VendorConnectOrCreateInput>;
  create?: InputMaybe<VendorRelationInput>;
  delete?: InputMaybe<VendorDeleteInput>;
  disconnect?: InputMaybe<VendorDisconnectInput>;
  update?: InputMaybe<VendorUpdateInput>;
  where?: InputMaybe<VendorWhere>;
};

export type Notification = {
  __typename?: 'Notification';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<NotificationAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: NotificationAdminCreatedConnection;
  clientHas?: Maybe<Client>;
  clientHasAggregate?: Maybe<NotificationClientClientHasAggregationSelection>;
  clientHasConnection: NotificationClientHasConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  vendorHas?: Maybe<Vendor>;
  vendorHasAggregate?: Maybe<NotificationVendorVendorHasAggregationSelection>;
  vendorHasConnection: NotificationVendorHasConnection;
};


export type NotificationAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type NotificationAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type NotificationAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationAdminCreatedConnectionSort>>;
  where?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
};


export type NotificationClientHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type NotificationClientHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type NotificationClientHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationClientHasConnectionSort>>;
  where?: InputMaybe<NotificationClientHasConnectionWhere>;
};


export type NotificationVendorHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type NotificationVendorHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type NotificationVendorHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationVendorHasConnectionSort>>;
  where?: InputMaybe<NotificationVendorHasConnectionWhere>;
};

export type NotificationAdminAdminCreatedAggregationSelection = {
  __typename?: 'NotificationAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NotificationAdminAdminCreatedNodeAggregateSelection>;
};

export type NotificationAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'NotificationAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type NotificationAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<NotificationAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<NotificationAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<NotificationAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NotificationAdminCreatedNodeAggregationWhereInput>;
};

export type NotificationAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type NotificationAdminCreatedConnectOrCreateFieldInput = {
  onCreate: NotificationAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type NotificationAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type NotificationAdminCreatedConnection = {
  __typename?: 'NotificationAdminCreatedConnection';
  edges: Array<NotificationAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NotificationAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type NotificationAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<NotificationAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<NotificationAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type NotificationAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type NotificationAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
};

export type NotificationAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
};

export type NotificationAdminCreatedFieldInput = {
  connect?: InputMaybe<NotificationAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<NotificationAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<NotificationAdminCreatedCreateFieldInput>;
};

export type NotificationAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NotificationAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NotificationAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NotificationAdminCreatedNodeAggregationWhereInput>>;
};

export type NotificationAdminCreatedRelationship = {
  __typename?: 'NotificationAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type NotificationAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type NotificationAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<NotificationAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<NotificationAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<NotificationAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<NotificationAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<NotificationAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<NotificationAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
};

export type NotificationAggregateSelection = {
  __typename?: 'NotificationAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
};

export type NotificationClientClientHasAggregationSelection = {
  __typename?: 'NotificationClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NotificationClientClientHasNodeAggregateSelection>;
};

export type NotificationClientClientHasNodeAggregateSelection = {
  __typename?: 'NotificationClientClientHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type NotificationClientHasAggregateInput = {
  AND?: InputMaybe<Array<NotificationClientHasAggregateInput>>;
  NOT?: InputMaybe<NotificationClientHasAggregateInput>;
  OR?: InputMaybe<Array<NotificationClientHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NotificationClientHasNodeAggregationWhereInput>;
};

export type NotificationClientHasConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type NotificationClientHasConnectOrCreateFieldInput = {
  onCreate: NotificationClientHasConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type NotificationClientHasConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type NotificationClientHasConnection = {
  __typename?: 'NotificationClientHasConnection';
  edges: Array<NotificationClientHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NotificationClientHasConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type NotificationClientHasConnectionWhere = {
  AND?: InputMaybe<Array<NotificationClientHasConnectionWhere>>;
  NOT?: InputMaybe<NotificationClientHasConnectionWhere>;
  OR?: InputMaybe<Array<NotificationClientHasConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type NotificationClientHasCreateFieldInput = {
  node: ClientCreateInput;
};

export type NotificationClientHasDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<NotificationClientHasConnectionWhere>;
};

export type NotificationClientHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<NotificationClientHasConnectionWhere>;
};

export type NotificationClientHasFieldInput = {
  connect?: InputMaybe<NotificationClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<NotificationClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<NotificationClientHasCreateFieldInput>;
};

export type NotificationClientHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NotificationClientHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NotificationClientHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NotificationClientHasNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type NotificationClientHasRelationship = {
  __typename?: 'NotificationClientHasRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type NotificationClientHasUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type NotificationClientHasUpdateFieldInput = {
  connect?: InputMaybe<NotificationClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<NotificationClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<NotificationClientHasCreateFieldInput>;
  delete?: InputMaybe<NotificationClientHasDeleteFieldInput>;
  disconnect?: InputMaybe<NotificationClientHasDisconnectFieldInput>;
  update?: InputMaybe<NotificationClientHasUpdateConnectionInput>;
  where?: InputMaybe<NotificationClientHasConnectionWhere>;
};

export type NotificationConnectInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedConnectFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasConnectFieldInput>;
  vendorHas?: InputMaybe<NotificationVendorHasConnectFieldInput>;
};

export type NotificationConnectOrCreateInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedConnectOrCreateFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasConnectOrCreateFieldInput>;
  vendorHas?: InputMaybe<NotificationVendorHasConnectOrCreateFieldInput>;
};

export type NotificationConnectOrCreateWhere = {
  node: NotificationUniqueWhere;
};

export type NotificationConnectWhere = {
  node: NotificationWhere;
};

export type NotificationCreateInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<NotificationVendorHasFieldInput>;
};

export type NotificationDeleteInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedDeleteFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasDeleteFieldInput>;
  vendorHas?: InputMaybe<NotificationVendorHasDeleteFieldInput>;
};

export type NotificationDisconnectInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedDisconnectFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasDisconnectFieldInput>;
  vendorHas?: InputMaybe<NotificationVendorHasDisconnectFieldInput>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type NotificationOnCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more NotificationSort objects to sort Notifications by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NotificationSort>>;
};

export type NotificationRelationInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedCreateFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasCreateFieldInput>;
  vendorHas?: InputMaybe<NotificationVendorHasCreateFieldInput>;
};

/** Fields to sort Notifications by. The order in which sorts are applied is not guaranteed when specifying many fields in one NotificationSort object. */
export type NotificationSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type NotificationUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NotificationUpdateInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedUpdateFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasUpdateFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<NotificationVendorHasUpdateFieldInput>;
};

export type NotificationVendorHasAggregateInput = {
  AND?: InputMaybe<Array<NotificationVendorHasAggregateInput>>;
  NOT?: InputMaybe<NotificationVendorHasAggregateInput>;
  OR?: InputMaybe<Array<NotificationVendorHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NotificationVendorHasNodeAggregationWhereInput>;
};

export type NotificationVendorHasConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type NotificationVendorHasConnectOrCreateFieldInput = {
  onCreate: NotificationVendorHasConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type NotificationVendorHasConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type NotificationVendorHasConnection = {
  __typename?: 'NotificationVendorHasConnection';
  edges: Array<NotificationVendorHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NotificationVendorHasConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type NotificationVendorHasConnectionWhere = {
  AND?: InputMaybe<Array<NotificationVendorHasConnectionWhere>>;
  NOT?: InputMaybe<NotificationVendorHasConnectionWhere>;
  OR?: InputMaybe<Array<NotificationVendorHasConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type NotificationVendorHasCreateFieldInput = {
  node: VendorCreateInput;
};

export type NotificationVendorHasDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<NotificationVendorHasConnectionWhere>;
};

export type NotificationVendorHasDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<NotificationVendorHasConnectionWhere>;
};

export type NotificationVendorHasFieldInput = {
  connect?: InputMaybe<NotificationVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<NotificationVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<NotificationVendorHasCreateFieldInput>;
};

export type NotificationVendorHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NotificationVendorHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NotificationVendorHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NotificationVendorHasNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type NotificationVendorHasRelationship = {
  __typename?: 'NotificationVendorHasRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type NotificationVendorHasUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type NotificationVendorHasUpdateFieldInput = {
  connect?: InputMaybe<NotificationVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<NotificationVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<NotificationVendorHasCreateFieldInput>;
  delete?: InputMaybe<NotificationVendorHasDeleteFieldInput>;
  disconnect?: InputMaybe<NotificationVendorHasDisconnectFieldInput>;
  update?: InputMaybe<NotificationVendorHasUpdateConnectionInput>;
  where?: InputMaybe<NotificationVendorHasConnectionWhere>;
};

export type NotificationVendorVendorHasAggregationSelection = {
  __typename?: 'NotificationVendorVendorHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NotificationVendorVendorHasNodeAggregateSelection>;
};

export type NotificationVendorVendorHasNodeAggregateSelection = {
  __typename?: 'NotificationVendorVendorHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type NotificationWhere = {
  AND?: InputMaybe<Array<NotificationWhere>>;
  NOT?: InputMaybe<NotificationWhere>;
  OR?: InputMaybe<Array<NotificationWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<NotificationAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<NotificationAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  clientHas?: InputMaybe<ClientWhere>;
  clientHasAggregate?: InputMaybe<NotificationClientHasAggregateInput>;
  clientHasConnection?: InputMaybe<NotificationClientHasConnectionWhere>;
  clientHasConnection_NOT?: InputMaybe<NotificationClientHasConnectionWhere>;
  clientHas_NOT?: InputMaybe<ClientWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  image_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<VendorWhere>;
  vendorHasAggregate?: InputMaybe<NotificationVendorHasAggregateInput>;
  vendorHasConnection?: InputMaybe<NotificationVendorHasConnectionWhere>;
  vendorHasConnection_NOT?: InputMaybe<NotificationVendorHasConnectionWhere>;
  vendorHas_NOT?: InputMaybe<VendorWhere>;
};

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  edges: Array<NotificationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Page = {
  __typename?: 'Page';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<PageAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: PageAdminCreatedConnection;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PageAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type PageAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type PageAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PageAdminCreatedConnectionSort>>;
  where?: InputMaybe<PageAdminCreatedConnectionWhere>;
};

export type PageAdminAdminCreatedAggregationSelection = {
  __typename?: 'PageAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PageAdminAdminCreatedNodeAggregateSelection>;
};

export type PageAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'PageAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type PageAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<PageAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<PageAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<PageAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PageAdminCreatedNodeAggregationWhereInput>;
};

export type PageAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type PageAdminCreatedConnectOrCreateFieldInput = {
  onCreate: PageAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type PageAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type PageAdminCreatedConnection = {
  __typename?: 'PageAdminCreatedConnection';
  edges: Array<PageAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type PageAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<PageAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<PageAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<PageAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type PageAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type PageAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<PageAdminCreatedConnectionWhere>;
};

export type PageAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<PageAdminCreatedConnectionWhere>;
};

export type PageAdminCreatedFieldInput = {
  connect?: InputMaybe<PageAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<PageAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<PageAdminCreatedCreateFieldInput>;
};

export type PageAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PageAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PageAdminCreatedNodeAggregationWhereInput>>;
};

export type PageAdminCreatedRelationship = {
  __typename?: 'PageAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type PageAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type PageAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<PageAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<PageAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<PageAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<PageAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<PageAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<PageAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<PageAdminCreatedConnectionWhere>;
};

export type PageAggregateSelection = {
  __typename?: 'PageAggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  subtitle: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type PageConnectInput = {
  adminCreated?: InputMaybe<PageAdminCreatedConnectFieldInput>;
};

export type PageConnectOrCreateInput = {
  adminCreated?: InputMaybe<PageAdminCreatedConnectOrCreateFieldInput>;
};

export type PageConnectOrCreateWhere = {
  node: PageUniqueWhere;
};

export type PageConnectWhere = {
  node: PageWhere;
};

export type PageCreateInput = {
  adminCreated?: InputMaybe<PageAdminCreatedFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageDeleteInput = {
  adminCreated?: InputMaybe<PageAdminCreatedDeleteFieldInput>;
};

export type PageDisconnectInput = {
  adminCreated?: InputMaybe<PageAdminCreatedDisconnectFieldInput>;
};

export type PageEdge = {
  __typename?: 'PageEdge';
  cursor: Scalars['String']['output'];
  node: Page;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PageSort objects to sort Pages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PageSort>>;
};

export type PageRelationInput = {
  adminCreated?: InputMaybe<PageAdminCreatedCreateFieldInput>;
};

/** Fields to sort Pages by. The order in which sorts are applied is not guaranteed when specifying many fields in one PageSort object. */
export type PageSort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  subtitle?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type PageUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PageUpdateInput = {
  adminCreated?: InputMaybe<PageAdminCreatedUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageWhere = {
  AND?: InputMaybe<Array<PageWhere>>;
  NOT?: InputMaybe<PageWhere>;
  OR?: InputMaybe<Array<PageWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<PageAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<PageAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<PageAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  image_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  subtitle_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  subtitle_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type PagesConnection = {
  __typename?: 'PagesConnection';
  edges: Array<PageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Project = {
  __typename?: 'Project';
  address?: Maybe<Scalars['String']['output']>;
  adminHas?: Maybe<Admin>;
  adminHasAggregate?: Maybe<ProjectAdminAdminHasAggregationSelection>;
  adminHasConnection: ProjectAdminHasConnection;
  city?: Maybe<Scalars['String']['output']>;
  clientOrdered?: Maybe<Client>;
  clientOrderedAggregate?: Maybe<ProjectClientClientOrderedAggregationSelection>;
  clientOrderedConnection: ProjectClientOrderedConnection;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gst?: Maybe<Scalars['String']['output']>;
  hasModule: Array<Module>;
  hasModuleAggregate?: Maybe<ProjectModuleHasModuleAggregationSelection>;
  hasModuleConnection: ProjectHasModuleConnection;
  id: Scalars['ID']['output'];
  projectticketFor?: Maybe<ProjectTicket>;
  projectticketForAggregate?: Maybe<ProjectProjectTicketProjectticketForAggregationSelection>;
  projectticketForConnection: ProjectProjectticketForConnection;
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProjectAdminHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type ProjectAdminHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type ProjectAdminHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectAdminHasConnectionSort>>;
  where?: InputMaybe<ProjectAdminHasConnectionWhere>;
};


export type ProjectClientOrderedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type ProjectClientOrderedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type ProjectClientOrderedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectClientOrderedConnectionSort>>;
  where?: InputMaybe<ProjectClientOrderedConnectionWhere>;
};


export type ProjectHasModuleArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleOptions>;
  where?: InputMaybe<ModuleWhere>;
};


export type ProjectHasModuleAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleWhere>;
};


export type ProjectHasModuleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectHasModuleConnectionSort>>;
  where?: InputMaybe<ProjectHasModuleConnectionWhere>;
};


export type ProjectProjectticketForArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectTicketOptions>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type ProjectProjectticketForAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type ProjectProjectticketForConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectProjectticketForConnectionSort>>;
  where?: InputMaybe<ProjectProjectticketForConnectionWhere>;
};

export type ProjectAdminAdminHasAggregationSelection = {
  __typename?: 'ProjectAdminAdminHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectAdminAdminHasNodeAggregateSelection>;
};

export type ProjectAdminAdminHasNodeAggregateSelection = {
  __typename?: 'ProjectAdminAdminHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ProjectAdminHasAggregateInput = {
  AND?: InputMaybe<Array<ProjectAdminHasAggregateInput>>;
  NOT?: InputMaybe<ProjectAdminHasAggregateInput>;
  OR?: InputMaybe<Array<ProjectAdminHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectAdminHasNodeAggregationWhereInput>;
};

export type ProjectAdminHasConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type ProjectAdminHasConnectOrCreateFieldInput = {
  onCreate: ProjectAdminHasConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type ProjectAdminHasConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type ProjectAdminHasConnection = {
  __typename?: 'ProjectAdminHasConnection';
  edges: Array<ProjectAdminHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectAdminHasConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type ProjectAdminHasConnectionWhere = {
  AND?: InputMaybe<Array<ProjectAdminHasConnectionWhere>>;
  NOT?: InputMaybe<ProjectAdminHasConnectionWhere>;
  OR?: InputMaybe<Array<ProjectAdminHasConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type ProjectAdminHasCreateFieldInput = {
  node: AdminCreateInput;
};

export type ProjectAdminHasDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<ProjectAdminHasConnectionWhere>;
};

export type ProjectAdminHasDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<ProjectAdminHasConnectionWhere>;
};

export type ProjectAdminHasFieldInput = {
  connect?: InputMaybe<ProjectAdminHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectAdminHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectAdminHasCreateFieldInput>;
};

export type ProjectAdminHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectAdminHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectAdminHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectAdminHasNodeAggregationWhereInput>>;
};

export type ProjectAdminHasRelationship = {
  __typename?: 'ProjectAdminHasRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type ProjectAdminHasUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type ProjectAdminHasUpdateFieldInput = {
  connect?: InputMaybe<ProjectAdminHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectAdminHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectAdminHasCreateFieldInput>;
  delete?: InputMaybe<ProjectAdminHasDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectAdminHasDisconnectFieldInput>;
  update?: InputMaybe<ProjectAdminHasUpdateConnectionInput>;
  where?: InputMaybe<ProjectAdminHasConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: 'ProjectAggregateSelection';
  address: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  country: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ProjectClientClientOrderedAggregationSelection = {
  __typename?: 'ProjectClientClientOrderedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectClientClientOrderedNodeAggregateSelection>;
};

export type ProjectClientClientOrderedNodeAggregateSelection = {
  __typename?: 'ProjectClientClientOrderedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ProjectClientOrderedAggregateInput = {
  AND?: InputMaybe<Array<ProjectClientOrderedAggregateInput>>;
  NOT?: InputMaybe<ProjectClientOrderedAggregateInput>;
  OR?: InputMaybe<Array<ProjectClientOrderedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectClientOrderedNodeAggregationWhereInput>;
};

export type ProjectClientOrderedConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type ProjectClientOrderedConnectOrCreateFieldInput = {
  onCreate: ProjectClientOrderedConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type ProjectClientOrderedConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type ProjectClientOrderedConnection = {
  __typename?: 'ProjectClientOrderedConnection';
  edges: Array<ProjectClientOrderedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectClientOrderedConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type ProjectClientOrderedConnectionWhere = {
  AND?: InputMaybe<Array<ProjectClientOrderedConnectionWhere>>;
  NOT?: InputMaybe<ProjectClientOrderedConnectionWhere>;
  OR?: InputMaybe<Array<ProjectClientOrderedConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type ProjectClientOrderedCreateFieldInput = {
  node: ClientCreateInput;
};

export type ProjectClientOrderedDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<ProjectClientOrderedConnectionWhere>;
};

export type ProjectClientOrderedDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<ProjectClientOrderedConnectionWhere>;
};

export type ProjectClientOrderedFieldInput = {
  connect?: InputMaybe<ProjectClientOrderedConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectClientOrderedConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectClientOrderedCreateFieldInput>;
};

export type ProjectClientOrderedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectClientOrderedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectClientOrderedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectClientOrderedNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectClientOrderedRelationship = {
  __typename?: 'ProjectClientOrderedRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type ProjectClientOrderedUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type ProjectClientOrderedUpdateFieldInput = {
  connect?: InputMaybe<ProjectClientOrderedConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectClientOrderedConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectClientOrderedCreateFieldInput>;
  delete?: InputMaybe<ProjectClientOrderedDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectClientOrderedDisconnectFieldInput>;
  update?: InputMaybe<ProjectClientOrderedUpdateConnectionInput>;
  where?: InputMaybe<ProjectClientOrderedConnectionWhere>;
};

export type ProjectConnectInput = {
  adminHas?: InputMaybe<ProjectAdminHasConnectFieldInput>;
  clientOrdered?: InputMaybe<ProjectClientOrderedConnectFieldInput>;
  hasModule?: InputMaybe<Array<ProjectHasModuleConnectFieldInput>>;
  projectticketFor?: InputMaybe<ProjectProjectticketForConnectFieldInput>;
};

export type ProjectConnectOrCreateInput = {
  adminHas?: InputMaybe<ProjectAdminHasConnectOrCreateFieldInput>;
  clientOrdered?: InputMaybe<ProjectClientOrderedConnectOrCreateFieldInput>;
  hasModule?: InputMaybe<Array<ProjectHasModuleConnectOrCreateFieldInput>>;
};

export type ProjectConnectOrCreateWhere = {
  node: ProjectUniqueWhere;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  adminHas?: InputMaybe<ProjectAdminHasFieldInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientOrdered?: InputMaybe<ProjectClientOrderedFieldInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  hasModule?: InputMaybe<ProjectHasModuleFieldInput>;
  projectticketFor?: InputMaybe<ProjectProjectticketForFieldInput>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectDeleteInput = {
  adminHas?: InputMaybe<ProjectAdminHasDeleteFieldInput>;
  clientOrdered?: InputMaybe<ProjectClientOrderedDeleteFieldInput>;
  hasModule?: InputMaybe<Array<ProjectHasModuleDeleteFieldInput>>;
  projectticketFor?: InputMaybe<ProjectProjectticketForDeleteFieldInput>;
};

export type ProjectDisconnectInput = {
  adminHas?: InputMaybe<ProjectAdminHasDisconnectFieldInput>;
  clientOrdered?: InputMaybe<ProjectClientOrderedDisconnectFieldInput>;
  hasModule?: InputMaybe<Array<ProjectHasModuleDisconnectFieldInput>>;
  projectticketFor?: InputMaybe<ProjectProjectticketForDisconnectFieldInput>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ProjectHasModuleAggregateInput = {
  AND?: InputMaybe<Array<ProjectHasModuleAggregateInput>>;
  NOT?: InputMaybe<ProjectHasModuleAggregateInput>;
  OR?: InputMaybe<Array<ProjectHasModuleAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectHasModuleNodeAggregationWhereInput>;
};

export type ProjectHasModuleConnectFieldInput = {
  connect?: InputMaybe<Array<ModuleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleConnectWhere>;
};

export type ProjectHasModuleConnectOrCreateFieldInput = {
  onCreate: ProjectHasModuleConnectOrCreateFieldInputOnCreate;
  where: ModuleConnectOrCreateWhere;
};

export type ProjectHasModuleConnectOrCreateFieldInputOnCreate = {
  node: ModuleOnCreateInput;
};

export type ProjectHasModuleConnection = {
  __typename?: 'ProjectHasModuleConnection';
  edges: Array<ProjectHasModuleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectHasModuleConnectionSort = {
  node?: InputMaybe<ModuleSort>;
};

export type ProjectHasModuleConnectionWhere = {
  AND?: InputMaybe<Array<ProjectHasModuleConnectionWhere>>;
  NOT?: InputMaybe<ProjectHasModuleConnectionWhere>;
  OR?: InputMaybe<Array<ProjectHasModuleConnectionWhere>>;
  node?: InputMaybe<ModuleWhere>;
};

export type ProjectHasModuleCreateFieldInput = {
  node: ModuleCreateInput;
};

export type ProjectHasModuleDeleteFieldInput = {
  delete?: InputMaybe<ModuleDeleteInput>;
  where?: InputMaybe<ProjectHasModuleConnectionWhere>;
};

export type ProjectHasModuleDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleDisconnectInput>;
  where?: InputMaybe<ProjectHasModuleConnectionWhere>;
};

export type ProjectHasModuleFieldInput = {
  connect?: InputMaybe<Array<ProjectHasModuleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectHasModuleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectHasModuleCreateFieldInput>>;
};

export type ProjectHasModuleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectHasModuleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectHasModuleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectHasModuleNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectHasModuleRelationship = {
  __typename?: 'ProjectHasModuleRelationship';
  cursor: Scalars['String']['output'];
  node: Module;
};

export type ProjectHasModuleUpdateConnectionInput = {
  node?: InputMaybe<ModuleUpdateInput>;
};

export type ProjectHasModuleUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectHasModuleConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectHasModuleConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectHasModuleCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectHasModuleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectHasModuleDisconnectFieldInput>>;
  update?: InputMaybe<ProjectHasModuleUpdateConnectionInput>;
  where?: InputMaybe<ProjectHasModuleConnectionWhere>;
};

export type ProjectModuleHasModuleAggregationSelection = {
  __typename?: 'ProjectModuleHasModuleAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectModuleHasModuleNodeAggregateSelection>;
};

export type ProjectModuleHasModuleNodeAggregateSelection = {
  __typename?: 'ProjectModuleHasModuleNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ProjectOnCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectProjectTicketProjectticketForAggregationSelection = {
  __typename?: 'ProjectProjectTicketProjectticketForAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectProjectTicketProjectticketForNodeAggregateSelection>;
};

export type ProjectProjectTicketProjectticketForNodeAggregateSelection = {
  __typename?: 'ProjectProjectTicketProjectticketForNodeAggregateSelection';
  projectTicket: StringAggregateSelectionNullable;
};

export type ProjectProjectticketForAggregateInput = {
  AND?: InputMaybe<Array<ProjectProjectticketForAggregateInput>>;
  NOT?: InputMaybe<ProjectProjectticketForAggregateInput>;
  OR?: InputMaybe<Array<ProjectProjectticketForAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectProjectticketForNodeAggregationWhereInput>;
};

export type ProjectProjectticketForConnectFieldInput = {
  connect?: InputMaybe<ProjectTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectTicketConnectWhere>;
};

export type ProjectProjectticketForConnection = {
  __typename?: 'ProjectProjectticketForConnection';
  edges: Array<ProjectProjectticketForRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectProjectticketForConnectionSort = {
  node?: InputMaybe<ProjectTicketSort>;
};

export type ProjectProjectticketForConnectionWhere = {
  AND?: InputMaybe<Array<ProjectProjectticketForConnectionWhere>>;
  NOT?: InputMaybe<ProjectProjectticketForConnectionWhere>;
  OR?: InputMaybe<Array<ProjectProjectticketForConnectionWhere>>;
  node?: InputMaybe<ProjectTicketWhere>;
};

export type ProjectProjectticketForCreateFieldInput = {
  node: ProjectTicketCreateInput;
};

export type ProjectProjectticketForDeleteFieldInput = {
  delete?: InputMaybe<ProjectTicketDeleteInput>;
  where?: InputMaybe<ProjectProjectticketForConnectionWhere>;
};

export type ProjectProjectticketForDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectTicketDisconnectInput>;
  where?: InputMaybe<ProjectProjectticketForConnectionWhere>;
};

export type ProjectProjectticketForFieldInput = {
  connect?: InputMaybe<ProjectProjectticketForConnectFieldInput>;
  create?: InputMaybe<ProjectProjectticketForCreateFieldInput>;
};

export type ProjectProjectticketForNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectProjectticketForNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectProjectticketForNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectProjectticketForNodeAggregationWhereInput>>;
  projectTicket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  projectTicket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  projectTicket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectProjectticketForRelationship = {
  __typename?: 'ProjectProjectticketForRelationship';
  cursor: Scalars['String']['output'];
  node: ProjectTicket;
};

export type ProjectProjectticketForUpdateConnectionInput = {
  node?: InputMaybe<ProjectTicketUpdateInput>;
};

export type ProjectProjectticketForUpdateFieldInput = {
  connect?: InputMaybe<ProjectProjectticketForConnectFieldInput>;
  create?: InputMaybe<ProjectProjectticketForCreateFieldInput>;
  delete?: InputMaybe<ProjectProjectticketForDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectProjectticketForDisconnectFieldInput>;
  update?: InputMaybe<ProjectProjectticketForUpdateConnectionInput>;
  where?: InputMaybe<ProjectProjectticketForConnectionWhere>;
};

export type ProjectRelationInput = {
  adminHas?: InputMaybe<ProjectAdminHasCreateFieldInput>;
  clientOrdered?: InputMaybe<ProjectClientOrderedCreateFieldInput>;
  hasModule?: InputMaybe<Array<ProjectHasModuleCreateFieldInput>>;
  projectticketFor?: InputMaybe<ProjectProjectticketForCreateFieldInput>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  address?: InputMaybe<SortDirection>;
  city?: InputMaybe<SortDirection>;
  companyName?: InputMaybe<SortDirection>;
  country?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  gst?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type ProjectTicket = {
  __typename?: 'ProjectTicket';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<ProjectTicketAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: ProjectTicketAdminCreatedConnection;
  forProject?: Maybe<Project>;
  forProjectAggregate?: Maybe<ProjectTicketProjectForProjectAggregationSelection>;
  forProjectConnection: ProjectTicketForProjectConnection;
  hasModuleticket?: Maybe<ModuleTicket>;
  hasModuleticketAggregate?: Maybe<ProjectTicketModuleTicketHasModuleticketAggregationSelection>;
  hasModuleticketConnection: ProjectTicketHasModuleticketConnection;
  projectTicket?: Maybe<Scalars['String']['output']>;
};


export type ProjectTicketAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type ProjectTicketAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type ProjectTicketAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectTicketAdminCreatedConnectionSort>>;
  where?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
};


export type ProjectTicketForProjectArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type ProjectTicketForProjectAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type ProjectTicketForProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectTicketForProjectConnectionSort>>;
  where?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
};


export type ProjectTicketHasModuleticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ProjectTicketHasModuleticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type ProjectTicketHasModuleticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectTicketHasModuleticketConnectionSort>>;
  where?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
};

export type ProjectTicketAdminAdminCreatedAggregationSelection = {
  __typename?: 'ProjectTicketAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectTicketAdminAdminCreatedNodeAggregateSelection>;
};

export type ProjectTicketAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'ProjectTicketAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ProjectTicketAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<ProjectTicketAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<ProjectTicketAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<ProjectTicketAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectTicketAdminCreatedNodeAggregationWhereInput>;
};

export type ProjectTicketAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type ProjectTicketAdminCreatedConnectOrCreateFieldInput = {
  onCreate: ProjectTicketAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type ProjectTicketAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type ProjectTicketAdminCreatedConnection = {
  __typename?: 'ProjectTicketAdminCreatedConnection';
  edges: Array<ProjectTicketAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectTicketAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type ProjectTicketAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<ProjectTicketAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<ProjectTicketAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type ProjectTicketAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type ProjectTicketAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
};

export type ProjectTicketAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
};

export type ProjectTicketAdminCreatedFieldInput = {
  connect?: InputMaybe<ProjectTicketAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectTicketAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectTicketAdminCreatedCreateFieldInput>;
};

export type ProjectTicketAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectTicketAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectTicketAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectTicketAdminCreatedNodeAggregationWhereInput>>;
};

export type ProjectTicketAdminCreatedRelationship = {
  __typename?: 'ProjectTicketAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type ProjectTicketAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type ProjectTicketAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<ProjectTicketAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectTicketAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectTicketAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<ProjectTicketAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectTicketAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<ProjectTicketAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
};

export type ProjectTicketAggregateSelection = {
  __typename?: 'ProjectTicketAggregateSelection';
  count: Scalars['Int']['output'];
  projectTicket: StringAggregateSelectionNullable;
};

export type ProjectTicketConnectInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedConnectFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectConnectFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketConnectFieldInput>;
};

export type ProjectTicketConnectOrCreateInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedConnectOrCreateFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectConnectOrCreateFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketConnectOrCreateFieldInput>;
};

export type ProjectTicketConnectWhere = {
  node: ProjectTicketWhere;
};

export type ProjectTicketCreateInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketFieldInput>;
  projectTicket?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectTicketDeleteInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedDeleteFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectDeleteFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketDeleteFieldInput>;
};

export type ProjectTicketDisconnectInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedDisconnectFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectDisconnectFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketDisconnectFieldInput>;
};

export type ProjectTicketEdge = {
  __typename?: 'ProjectTicketEdge';
  cursor: Scalars['String']['output'];
  node: ProjectTicket;
};

export type ProjectTicketForProjectAggregateInput = {
  AND?: InputMaybe<Array<ProjectTicketForProjectAggregateInput>>;
  NOT?: InputMaybe<ProjectTicketForProjectAggregateInput>;
  OR?: InputMaybe<Array<ProjectTicketForProjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectTicketForProjectNodeAggregationWhereInput>;
};

export type ProjectTicketForProjectConnectFieldInput = {
  connect?: InputMaybe<ProjectConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ProjectTicketForProjectConnectOrCreateFieldInput = {
  onCreate: ProjectTicketForProjectConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ProjectTicketForProjectConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type ProjectTicketForProjectConnection = {
  __typename?: 'ProjectTicketForProjectConnection';
  edges: Array<ProjectTicketForProjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectTicketForProjectConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type ProjectTicketForProjectConnectionWhere = {
  AND?: InputMaybe<Array<ProjectTicketForProjectConnectionWhere>>;
  NOT?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
  OR?: InputMaybe<Array<ProjectTicketForProjectConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type ProjectTicketForProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type ProjectTicketForProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
};

export type ProjectTicketForProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
};

export type ProjectTicketForProjectFieldInput = {
  connect?: InputMaybe<ProjectTicketForProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectTicketForProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectTicketForProjectCreateFieldInput>;
};

export type ProjectTicketForProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectTicketForProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectTicketForProjectNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectTicketForProjectNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  country_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gst_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gst_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gst_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTicketForProjectRelationship = {
  __typename?: 'ProjectTicketForProjectRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ProjectTicketForProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ProjectTicketForProjectUpdateFieldInput = {
  connect?: InputMaybe<ProjectTicketForProjectConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectTicketForProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectTicketForProjectCreateFieldInput>;
  delete?: InputMaybe<ProjectTicketForProjectDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectTicketForProjectDisconnectFieldInput>;
  update?: InputMaybe<ProjectTicketForProjectUpdateConnectionInput>;
  where?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
};

export type ProjectTicketHasModuleticketAggregateInput = {
  AND?: InputMaybe<Array<ProjectTicketHasModuleticketAggregateInput>>;
  NOT?: InputMaybe<ProjectTicketHasModuleticketAggregateInput>;
  OR?: InputMaybe<Array<ProjectTicketHasModuleticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectTicketHasModuleticketNodeAggregationWhereInput>;
};

export type ProjectTicketHasModuleticketConnectFieldInput = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleTicketConnectWhere>;
};

export type ProjectTicketHasModuleticketConnectOrCreateFieldInput = {
  onCreate: ProjectTicketHasModuleticketConnectOrCreateFieldInputOnCreate;
  where: ModuleTicketConnectOrCreateWhere;
};

export type ProjectTicketHasModuleticketConnectOrCreateFieldInputOnCreate = {
  node: ModuleTicketOnCreateInput;
};

export type ProjectTicketHasModuleticketConnection = {
  __typename?: 'ProjectTicketHasModuleticketConnection';
  edges: Array<ProjectTicketHasModuleticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectTicketHasModuleticketConnectionSort = {
  node?: InputMaybe<ModuleTicketSort>;
};

export type ProjectTicketHasModuleticketConnectionWhere = {
  AND?: InputMaybe<Array<ProjectTicketHasModuleticketConnectionWhere>>;
  NOT?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
  OR?: InputMaybe<Array<ProjectTicketHasModuleticketConnectionWhere>>;
  node?: InputMaybe<ModuleTicketWhere>;
};

export type ProjectTicketHasModuleticketCreateFieldInput = {
  node: ModuleTicketCreateInput;
};

export type ProjectTicketHasModuleticketDeleteFieldInput = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
};

export type ProjectTicketHasModuleticketDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  where?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
};

export type ProjectTicketHasModuleticketFieldInput = {
  connect?: InputMaybe<ProjectTicketHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectTicketHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectTicketHasModuleticketCreateFieldInput>;
};

export type ProjectTicketHasModuleticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectTicketHasModuleticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectTicketHasModuleticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectTicketHasModuleticketNodeAggregationWhereInput>>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTicketHasModuleticketRelationship = {
  __typename?: 'ProjectTicketHasModuleticketRelationship';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type ProjectTicketHasModuleticketUpdateConnectionInput = {
  node?: InputMaybe<ModuleTicketUpdateInput>;
};

export type ProjectTicketHasModuleticketUpdateFieldInput = {
  connect?: InputMaybe<ProjectTicketHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectTicketHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectTicketHasModuleticketCreateFieldInput>;
  delete?: InputMaybe<ProjectTicketHasModuleticketDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectTicketHasModuleticketDisconnectFieldInput>;
  update?: InputMaybe<ProjectTicketHasModuleticketUpdateConnectionInput>;
  where?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
};

export type ProjectTicketModuleTicketHasModuleticketAggregationSelection = {
  __typename?: 'ProjectTicketModuleTicketHasModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectTicketModuleTicketHasModuleticketNodeAggregateSelection>;
};

export type ProjectTicketModuleTicketHasModuleticketNodeAggregateSelection = {
  __typename?: 'ProjectTicketModuleTicketHasModuleticketNodeAggregateSelection';
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type ProjectTicketOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProjectTicketSort objects to sort ProjectTickets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectTicketSort>>;
};

export type ProjectTicketProjectForProjectAggregationSelection = {
  __typename?: 'ProjectTicketProjectForProjectAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectTicketProjectForProjectNodeAggregateSelection>;
};

export type ProjectTicketProjectForProjectNodeAggregateSelection = {
  __typename?: 'ProjectTicketProjectForProjectNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  country: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ProjectTicketRelationInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedCreateFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectCreateFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketCreateFieldInput>;
};

/** Fields to sort ProjectTickets by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectTicketSort object. */
export type ProjectTicketSort = {
  projectTicket?: InputMaybe<SortDirection>;
};

export type ProjectTicketUpdateInput = {
  adminCreated?: InputMaybe<ProjectTicketAdminCreatedUpdateFieldInput>;
  forProject?: InputMaybe<ProjectTicketForProjectUpdateFieldInput>;
  hasModuleticket?: InputMaybe<ProjectTicketHasModuleticketUpdateFieldInput>;
  projectTicket?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectTicketWhere = {
  AND?: InputMaybe<Array<ProjectTicketWhere>>;
  NOT?: InputMaybe<ProjectTicketWhere>;
  OR?: InputMaybe<Array<ProjectTicketWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<ProjectTicketAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<ProjectTicketAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  forProject?: InputMaybe<ProjectWhere>;
  forProjectAggregate?: InputMaybe<ProjectTicketForProjectAggregateInput>;
  forProjectConnection?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
  forProjectConnection_NOT?: InputMaybe<ProjectTicketForProjectConnectionWhere>;
  forProject_NOT?: InputMaybe<ProjectWhere>;
  hasModuleticket?: InputMaybe<ModuleTicketWhere>;
  hasModuleticketAggregate?: InputMaybe<ProjectTicketHasModuleticketAggregateInput>;
  hasModuleticketConnection?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
  hasModuleticketConnection_NOT?: InputMaybe<ProjectTicketHasModuleticketConnectionWhere>;
  hasModuleticket_NOT?: InputMaybe<ModuleTicketWhere>;
  projectTicket?: InputMaybe<Scalars['String']['input']>;
  projectTicket_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  projectTicket_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  projectTicket_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectTicket_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectTicketsConnection = {
  __typename?: 'ProjectTicketsConnection';
  edges: Array<ProjectTicketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProjectUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  adminHas?: InputMaybe<ProjectAdminHasUpdateFieldInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientOrdered?: InputMaybe<ProjectClientOrderedUpdateFieldInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  hasModule?: InputMaybe<Array<ProjectHasModuleUpdateFieldInput>>;
  projectticketFor?: InputMaybe<ProjectProjectticketForUpdateFieldInput>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  address_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  address_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  adminHas?: InputMaybe<AdminWhere>;
  adminHasAggregate?: InputMaybe<ProjectAdminHasAggregateInput>;
  adminHasConnection?: InputMaybe<ProjectAdminHasConnectionWhere>;
  adminHasConnection_NOT?: InputMaybe<ProjectAdminHasConnectionWhere>;
  adminHas_NOT?: InputMaybe<AdminWhere>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  city_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  clientOrdered?: InputMaybe<ClientWhere>;
  clientOrderedAggregate?: InputMaybe<ProjectClientOrderedAggregateInput>;
  clientOrderedConnection?: InputMaybe<ProjectClientOrderedConnectionWhere>;
  clientOrderedConnection_NOT?: InputMaybe<ProjectClientOrderedConnectionWhere>;
  clientOrdered_NOT?: InputMaybe<ClientWhere>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  companyName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  country_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  country_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  country_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  gst_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  gst_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  gst_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gst_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  hasModuleAggregate?: InputMaybe<ProjectHasModuleAggregateInput>;
  /** Return Projects where all of the related ProjectHasModuleConnections match this filter */
  hasModuleConnection_ALL?: InputMaybe<ProjectHasModuleConnectionWhere>;
  /** Return Projects where none of the related ProjectHasModuleConnections match this filter */
  hasModuleConnection_NONE?: InputMaybe<ProjectHasModuleConnectionWhere>;
  /** Return Projects where one of the related ProjectHasModuleConnections match this filter */
  hasModuleConnection_SINGLE?: InputMaybe<ProjectHasModuleConnectionWhere>;
  /** Return Projects where some of the related ProjectHasModuleConnections match this filter */
  hasModuleConnection_SOME?: InputMaybe<ProjectHasModuleConnectionWhere>;
  /** Return Projects where all of the related Modules match this filter */
  hasModule_ALL?: InputMaybe<ModuleWhere>;
  /** Return Projects where none of the related Modules match this filter */
  hasModule_NONE?: InputMaybe<ModuleWhere>;
  /** Return Projects where one of the related Modules match this filter */
  hasModule_SINGLE?: InputMaybe<ModuleWhere>;
  /** Return Projects where some of the related Modules match this filter */
  hasModule_SOME?: InputMaybe<ModuleWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  projectticketFor?: InputMaybe<ProjectTicketWhere>;
  projectticketForAggregate?: InputMaybe<ProjectProjectticketForAggregateInput>;
  projectticketForConnection?: InputMaybe<ProjectProjectticketForConnectionWhere>;
  projectticketForConnection_NOT?: InputMaybe<ProjectProjectticketForConnectionWhere>;
  projectticketFor_NOT?: InputMaybe<ProjectTicketWhere>;
  status?: InputMaybe<Status>;
  status_IN?: InputMaybe<Array<InputMaybe<Status>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  admins: Array<Admin>;
  adminsAggregate: AdminAggregateSelection;
  adminsConnection: AdminsConnection;
  clients: Array<Client>;
  clientsAggregate: ClientAggregateSelection;
  clientsConnection: ClientsConnection;
  communicationTickets: Array<CommunicationTicket>;
  communicationTicketsAggregate: CommunicationTicketAggregateSelection;
  communicationTicketsConnection: CommunicationTicketsConnection;
  counters: Array<Counter>;
  countersAggregate: CounterAggregateSelection;
  countersConnection: CountersConnection;
  documents: Array<Documents>;
  documentsAggregate: DocumentsAggregateSelection;
  documentsConnection: DocumentsConnection;
  employees: Array<Employee>;
  employeesAggregate: EmployeeAggregateSelection;
  employeesConnection: EmployeesConnection;
  files: Array<Files>;
  filesAggregate: FilesAggregateSelection;
  filesConnection: FilesConnection;
  images: Array<Images>;
  imagesAggregate: ImagesAggregateSelection;
  imagesConnection: ImagesConnection;
  invoices: Array<Invoice>;
  invoicesAggregate: InvoiceAggregateSelection;
  invoicesConnection: InvoicesConnection;
  leads: Array<Leads>;
  leadsAggregate: LeadsAggregateSelection;
  leadsConnection: LeadsConnection;
  managements: Array<Management>;
  managementsAggregate: ManagementAggregateSelection;
  managementsConnection: ManagementsConnection;
  moduleTickets: Array<ModuleTicket>;
  moduleTicketsAggregate: ModuleTicketAggregateSelection;
  moduleTicketsConnection: ModuleTicketsConnection;
  modules: Array<Module>;
  modulesAggregate: ModuleAggregateSelection;
  modulesConnection: ModulesConnection;
  notifications: Array<Notification>;
  notificationsAggregate: NotificationAggregateSelection;
  notificationsConnection: NotificationsConnection;
  pages: Array<Page>;
  pagesAggregate: PageAggregateSelection;
  pagesConnection: PagesConnection;
  projectTickets: Array<ProjectTicket>;
  projectTicketsAggregate: ProjectTicketAggregateSelection;
  projectTicketsConnection: ProjectTicketsConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  replies: Array<Reply>;
  repliesAggregate: ReplyAggregateSelection;
  repliesConnection: RepliesConnection;
  roles: Array<Role>;
  rolesAggregate: RoleAggregateSelection;
  rolesConnection: RolesConnection;
  services: Array<Service>;
  servicesAggregate: ServiceAggregateSelection;
  servicesConnection: ServicesConnection;
  supportTickets: Array<SupportTicket>;
  supportTicketsAggregate: SupportTicketAggregateSelection;
  supportTicketsConnection: SupportTicketsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
  vendors: Array<Vendor>;
  vendorsAggregate: VendorAggregateSelection;
  vendorsConnection: VendorsConnection;
};


export type QueryAdminsArgs = {
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type QueryAdminsAggregateArgs = {
  where?: InputMaybe<AdminWhere>;
};


export type QueryAdminsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AdminSort>>>;
  where?: InputMaybe<AdminWhere>;
};


export type QueryClientsArgs = {
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type QueryClientsAggregateArgs = {
  where?: InputMaybe<ClientWhere>;
};


export type QueryClientsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ClientSort>>>;
  where?: InputMaybe<ClientWhere>;
};


export type QueryCommunicationTicketsArgs = {
  options?: InputMaybe<CommunicationTicketOptions>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type QueryCommunicationTicketsAggregateArgs = {
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type QueryCommunicationTicketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CommunicationTicketSort>>>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type QueryCountersArgs = {
  options?: InputMaybe<CounterOptions>;
  where?: InputMaybe<CounterWhere>;
};


export type QueryCountersAggregateArgs = {
  where?: InputMaybe<CounterWhere>;
};


export type QueryCountersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CounterSort>>>;
  where?: InputMaybe<CounterWhere>;
};


export type QueryDocumentsArgs = {
  options?: InputMaybe<DocumentsOptions>;
  where?: InputMaybe<DocumentsWhere>;
};


export type QueryDocumentsAggregateArgs = {
  where?: InputMaybe<DocumentsWhere>;
};


export type QueryDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DocumentsSort>>>;
  where?: InputMaybe<DocumentsWhere>;
};


export type QueryEmployeesArgs = {
  options?: InputMaybe<EmployeeOptions>;
  where?: InputMaybe<EmployeeWhere>;
};


export type QueryEmployeesAggregateArgs = {
  where?: InputMaybe<EmployeeWhere>;
};


export type QueryEmployeesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<EmployeeSort>>>;
  where?: InputMaybe<EmployeeWhere>;
};


export type QueryFilesArgs = {
  options?: InputMaybe<FilesOptions>;
  where?: InputMaybe<FilesWhere>;
};


export type QueryFilesAggregateArgs = {
  where?: InputMaybe<FilesWhere>;
};


export type QueryFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FilesSort>>>;
  where?: InputMaybe<FilesWhere>;
};


export type QueryImagesArgs = {
  options?: InputMaybe<ImagesOptions>;
  where?: InputMaybe<ImagesWhere>;
};


export type QueryImagesAggregateArgs = {
  where?: InputMaybe<ImagesWhere>;
};


export type QueryImagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ImagesSort>>>;
  where?: InputMaybe<ImagesWhere>;
};


export type QueryInvoicesArgs = {
  options?: InputMaybe<InvoiceOptions>;
  where?: InputMaybe<InvoiceWhere>;
};


export type QueryInvoicesAggregateArgs = {
  where?: InputMaybe<InvoiceWhere>;
};


export type QueryInvoicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<InvoiceSort>>>;
  where?: InputMaybe<InvoiceWhere>;
};


export type QueryLeadsArgs = {
  options?: InputMaybe<LeadsOptions>;
  where?: InputMaybe<LeadsWhere>;
};


export type QueryLeadsAggregateArgs = {
  where?: InputMaybe<LeadsWhere>;
};


export type QueryLeadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<LeadsSort>>>;
  where?: InputMaybe<LeadsWhere>;
};


export type QueryManagementsArgs = {
  options?: InputMaybe<ManagementOptions>;
  where?: InputMaybe<ManagementWhere>;
};


export type QueryManagementsAggregateArgs = {
  where?: InputMaybe<ManagementWhere>;
};


export type QueryManagementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ManagementSort>>>;
  where?: InputMaybe<ManagementWhere>;
};


export type QueryModuleTicketsArgs = {
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type QueryModuleTicketsAggregateArgs = {
  where?: InputMaybe<ModuleTicketWhere>;
};


export type QueryModuleTicketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ModuleTicketSort>>>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type QueryModulesArgs = {
  options?: InputMaybe<ModuleOptions>;
  where?: InputMaybe<ModuleWhere>;
};


export type QueryModulesAggregateArgs = {
  where?: InputMaybe<ModuleWhere>;
};


export type QueryModulesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ModuleSort>>>;
  where?: InputMaybe<ModuleWhere>;
};


export type QueryNotificationsArgs = {
  options?: InputMaybe<NotificationOptions>;
  where?: InputMaybe<NotificationWhere>;
};


export type QueryNotificationsAggregateArgs = {
  where?: InputMaybe<NotificationWhere>;
};


export type QueryNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<NotificationSort>>>;
  where?: InputMaybe<NotificationWhere>;
};


export type QueryPagesArgs = {
  options?: InputMaybe<PageOptions>;
  where?: InputMaybe<PageWhere>;
};


export type QueryPagesAggregateArgs = {
  where?: InputMaybe<PageWhere>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PageSort>>>;
  where?: InputMaybe<PageWhere>;
};


export type QueryProjectTicketsArgs = {
  options?: InputMaybe<ProjectTicketOptions>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type QueryProjectTicketsAggregateArgs = {
  where?: InputMaybe<ProjectTicketWhere>;
};


export type QueryProjectTicketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectTicketSort>>>;
  where?: InputMaybe<ProjectTicketWhere>;
};


export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryRepliesArgs = {
  options?: InputMaybe<ReplyOptions>;
  where?: InputMaybe<ReplyWhere>;
};


export type QueryRepliesAggregateArgs = {
  where?: InputMaybe<ReplyWhere>;
};


export type QueryRepliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ReplySort>>>;
  where?: InputMaybe<ReplyWhere>;
};


export type QueryRolesArgs = {
  options?: InputMaybe<RoleOptions>;
  where?: InputMaybe<RoleWhere>;
};


export type QueryRolesAggregateArgs = {
  where?: InputMaybe<RoleWhere>;
};


export type QueryRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RoleSort>>>;
  where?: InputMaybe<RoleWhere>;
};


export type QueryServicesArgs = {
  options?: InputMaybe<ServiceOptions>;
  where?: InputMaybe<ServiceWhere>;
};


export type QueryServicesAggregateArgs = {
  where?: InputMaybe<ServiceWhere>;
};


export type QueryServicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ServiceSort>>>;
  where?: InputMaybe<ServiceWhere>;
};


export type QuerySupportTicketsArgs = {
  options?: InputMaybe<SupportTicketOptions>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type QuerySupportTicketsAggregateArgs = {
  where?: InputMaybe<SupportTicketWhere>;
};


export type QuerySupportTicketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SupportTicketSort>>>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};


export type QueryVendorsArgs = {
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type QueryVendorsAggregateArgs = {
  where?: InputMaybe<VendorWhere>;
};


export type QueryVendorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<VendorSort>>>;
  where?: InputMaybe<VendorWhere>;
};

export type RepliesConnection = {
  __typename?: 'RepliesConnection';
  edges: Array<ReplyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Reply = {
  __typename?: 'Reply';
  clientHas?: Maybe<Client>;
  clientHasAggregate?: Maybe<ReplyClientClientHasAggregationSelection>;
  clientHasConnection: ReplyClientHasConnection;
  communicationticketHas?: Maybe<CommunicationTicket>;
  communicationticketHasAggregate?: Maybe<ReplyCommunicationTicketCommunicationticketHasAggregationSelection>;
  communicationticketHasConnection: ReplyCommunicationticketHasConnection;
  id: Scalars['ID']['output'];
  replyMessage?: Maybe<Scalars['String']['output']>;
  senderEmail?: Maybe<Scalars['String']['output']>;
  vendorHas?: Maybe<Vendor>;
  vendorHasAggregate?: Maybe<ReplyVendorVendorHasAggregationSelection>;
  vendorHasConnection: ReplyVendorHasConnection;
};


export type ReplyClientHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type ReplyClientHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type ReplyClientHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReplyClientHasConnectionSort>>;
  where?: InputMaybe<ReplyClientHasConnectionWhere>;
};


export type ReplyCommunicationticketHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommunicationTicketOptions>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type ReplyCommunicationticketHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type ReplyCommunicationticketHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReplyCommunicationticketHasConnectionSort>>;
  where?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
};


export type ReplyVendorHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type ReplyVendorHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type ReplyVendorHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReplyVendorHasConnectionSort>>;
  where?: InputMaybe<ReplyVendorHasConnectionWhere>;
};

export type ReplyAggregateSelection = {
  __typename?: 'ReplyAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  replyMessage: StringAggregateSelectionNullable;
  senderEmail: StringAggregateSelectionNullable;
};

export type ReplyClientClientHasAggregationSelection = {
  __typename?: 'ReplyClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ReplyClientClientHasNodeAggregateSelection>;
};

export type ReplyClientClientHasNodeAggregateSelection = {
  __typename?: 'ReplyClientClientHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ReplyClientHasAggregateInput = {
  AND?: InputMaybe<Array<ReplyClientHasAggregateInput>>;
  NOT?: InputMaybe<ReplyClientHasAggregateInput>;
  OR?: InputMaybe<Array<ReplyClientHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ReplyClientHasNodeAggregationWhereInput>;
};

export type ReplyClientHasConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type ReplyClientHasConnectOrCreateFieldInput = {
  onCreate: ReplyClientHasConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type ReplyClientHasConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type ReplyClientHasConnection = {
  __typename?: 'ReplyClientHasConnection';
  edges: Array<ReplyClientHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReplyClientHasConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type ReplyClientHasConnectionWhere = {
  AND?: InputMaybe<Array<ReplyClientHasConnectionWhere>>;
  NOT?: InputMaybe<ReplyClientHasConnectionWhere>;
  OR?: InputMaybe<Array<ReplyClientHasConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type ReplyClientHasCreateFieldInput = {
  node: ClientCreateInput;
};

export type ReplyClientHasDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<ReplyClientHasConnectionWhere>;
};

export type ReplyClientHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<ReplyClientHasConnectionWhere>;
};

export type ReplyClientHasFieldInput = {
  connect?: InputMaybe<ReplyClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ReplyClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ReplyClientHasCreateFieldInput>;
};

export type ReplyClientHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyClientHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyClientHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ReplyClientHasNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplyClientHasRelationship = {
  __typename?: 'ReplyClientHasRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type ReplyClientHasUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type ReplyClientHasUpdateFieldInput = {
  connect?: InputMaybe<ReplyClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ReplyClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ReplyClientHasCreateFieldInput>;
  delete?: InputMaybe<ReplyClientHasDeleteFieldInput>;
  disconnect?: InputMaybe<ReplyClientHasDisconnectFieldInput>;
  update?: InputMaybe<ReplyClientHasUpdateConnectionInput>;
  where?: InputMaybe<ReplyClientHasConnectionWhere>;
};

export type ReplyCommunicationTicketCommunicationticketHasAggregationSelection = {
  __typename?: 'ReplyCommunicationTicketCommunicationticketHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ReplyCommunicationTicketCommunicationticketHasNodeAggregateSelection>;
};

export type ReplyCommunicationTicketCommunicationticketHasNodeAggregateSelection = {
  __typename?: 'ReplyCommunicationTicketCommunicationticketHasNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  files: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  message: StringAggregateSelectionNullable;
  sub: StringAggregateSelectionNullable;
};

export type ReplyCommunicationticketHasAggregateInput = {
  AND?: InputMaybe<Array<ReplyCommunicationticketHasAggregateInput>>;
  NOT?: InputMaybe<ReplyCommunicationticketHasAggregateInput>;
  OR?: InputMaybe<Array<ReplyCommunicationticketHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ReplyCommunicationticketHasNodeAggregationWhereInput>;
};

export type ReplyCommunicationticketHasConnectFieldInput = {
  connect?: InputMaybe<CommunicationTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommunicationTicketConnectWhere>;
};

export type ReplyCommunicationticketHasConnectOrCreateFieldInput = {
  onCreate: ReplyCommunicationticketHasConnectOrCreateFieldInputOnCreate;
  where: CommunicationTicketConnectOrCreateWhere;
};

export type ReplyCommunicationticketHasConnectOrCreateFieldInputOnCreate = {
  node: CommunicationTicketOnCreateInput;
};

export type ReplyCommunicationticketHasConnection = {
  __typename?: 'ReplyCommunicationticketHasConnection';
  edges: Array<ReplyCommunicationticketHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReplyCommunicationticketHasConnectionSort = {
  node?: InputMaybe<CommunicationTicketSort>;
};

export type ReplyCommunicationticketHasConnectionWhere = {
  AND?: InputMaybe<Array<ReplyCommunicationticketHasConnectionWhere>>;
  NOT?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
  OR?: InputMaybe<Array<ReplyCommunicationticketHasConnectionWhere>>;
  node?: InputMaybe<CommunicationTicketWhere>;
};

export type ReplyCommunicationticketHasCreateFieldInput = {
  node: CommunicationTicketCreateInput;
};

export type ReplyCommunicationticketHasDeleteFieldInput = {
  delete?: InputMaybe<CommunicationTicketDeleteInput>;
  where?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
};

export type ReplyCommunicationticketHasDisconnectFieldInput = {
  disconnect?: InputMaybe<CommunicationTicketDisconnectInput>;
  where?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
};

export type ReplyCommunicationticketHasFieldInput = {
  connect?: InputMaybe<ReplyCommunicationticketHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ReplyCommunicationticketHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ReplyCommunicationticketHasCreateFieldInput>;
};

export type ReplyCommunicationticketHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommunicationticketHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommunicationticketHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ReplyCommunicationticketHasNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  files_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  files_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplyCommunicationticketHasRelationship = {
  __typename?: 'ReplyCommunicationticketHasRelationship';
  cursor: Scalars['String']['output'];
  node: CommunicationTicket;
};

export type ReplyCommunicationticketHasUpdateConnectionInput = {
  node?: InputMaybe<CommunicationTicketUpdateInput>;
};

export type ReplyCommunicationticketHasUpdateFieldInput = {
  connect?: InputMaybe<ReplyCommunicationticketHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ReplyCommunicationticketHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ReplyCommunicationticketHasCreateFieldInput>;
  delete?: InputMaybe<ReplyCommunicationticketHasDeleteFieldInput>;
  disconnect?: InputMaybe<ReplyCommunicationticketHasDisconnectFieldInput>;
  update?: InputMaybe<ReplyCommunicationticketHasUpdateConnectionInput>;
  where?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
};

export type ReplyConnectInput = {
  clientHas?: InputMaybe<ReplyClientHasConnectFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasConnectFieldInput>;
  vendorHas?: InputMaybe<ReplyVendorHasConnectFieldInput>;
};

export type ReplyConnectOrCreateInput = {
  clientHas?: InputMaybe<ReplyClientHasConnectOrCreateFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasConnectOrCreateFieldInput>;
  vendorHas?: InputMaybe<ReplyVendorHasConnectOrCreateFieldInput>;
};

export type ReplyConnectOrCreateWhere = {
  node: ReplyUniqueWhere;
};

export type ReplyConnectWhere = {
  node: ReplyWhere;
};

export type ReplyCreateInput = {
  clientHas?: InputMaybe<ReplyClientHasFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasFieldInput>;
  replyMessage?: InputMaybe<Scalars['String']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<ReplyVendorHasFieldInput>;
};

export type ReplyDeleteInput = {
  clientHas?: InputMaybe<ReplyClientHasDeleteFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasDeleteFieldInput>;
  vendorHas?: InputMaybe<ReplyVendorHasDeleteFieldInput>;
};

export type ReplyDisconnectInput = {
  clientHas?: InputMaybe<ReplyClientHasDisconnectFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasDisconnectFieldInput>;
  vendorHas?: InputMaybe<ReplyVendorHasDisconnectFieldInput>;
};

export type ReplyEdge = {
  __typename?: 'ReplyEdge';
  cursor: Scalars['String']['output'];
  node: Reply;
};

export type ReplyOnCreateInput = {
  replyMessage?: InputMaybe<Scalars['String']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
};

export type ReplyOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ReplySort objects to sort Replies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReplySort>>;
};

export type ReplyRelationInput = {
  clientHas?: InputMaybe<ReplyClientHasCreateFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasCreateFieldInput>;
  vendorHas?: InputMaybe<ReplyVendorHasCreateFieldInput>;
};

/** Fields to sort Replies by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReplySort object. */
export type ReplySort = {
  id?: InputMaybe<SortDirection>;
  replyMessage?: InputMaybe<SortDirection>;
  senderEmail?: InputMaybe<SortDirection>;
};

export type ReplyUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ReplyUpdateInput = {
  clientHas?: InputMaybe<ReplyClientHasUpdateFieldInput>;
  communicationticketHas?: InputMaybe<ReplyCommunicationticketHasUpdateFieldInput>;
  replyMessage?: InputMaybe<Scalars['String']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<ReplyVendorHasUpdateFieldInput>;
};

export type ReplyVendorHasAggregateInput = {
  AND?: InputMaybe<Array<ReplyVendorHasAggregateInput>>;
  NOT?: InputMaybe<ReplyVendorHasAggregateInput>;
  OR?: InputMaybe<Array<ReplyVendorHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ReplyVendorHasNodeAggregationWhereInput>;
};

export type ReplyVendorHasConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type ReplyVendorHasConnectOrCreateFieldInput = {
  onCreate: ReplyVendorHasConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type ReplyVendorHasConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type ReplyVendorHasConnection = {
  __typename?: 'ReplyVendorHasConnection';
  edges: Array<ReplyVendorHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReplyVendorHasConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type ReplyVendorHasConnectionWhere = {
  AND?: InputMaybe<Array<ReplyVendorHasConnectionWhere>>;
  NOT?: InputMaybe<ReplyVendorHasConnectionWhere>;
  OR?: InputMaybe<Array<ReplyVendorHasConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type ReplyVendorHasCreateFieldInput = {
  node: VendorCreateInput;
};

export type ReplyVendorHasDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<ReplyVendorHasConnectionWhere>;
};

export type ReplyVendorHasDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<ReplyVendorHasConnectionWhere>;
};

export type ReplyVendorHasFieldInput = {
  connect?: InputMaybe<ReplyVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ReplyVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ReplyVendorHasCreateFieldInput>;
};

export type ReplyVendorHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyVendorHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyVendorHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ReplyVendorHasNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplyVendorHasRelationship = {
  __typename?: 'ReplyVendorHasRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type ReplyVendorHasUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type ReplyVendorHasUpdateFieldInput = {
  connect?: InputMaybe<ReplyVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ReplyVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ReplyVendorHasCreateFieldInput>;
  delete?: InputMaybe<ReplyVendorHasDeleteFieldInput>;
  disconnect?: InputMaybe<ReplyVendorHasDisconnectFieldInput>;
  update?: InputMaybe<ReplyVendorHasUpdateConnectionInput>;
  where?: InputMaybe<ReplyVendorHasConnectionWhere>;
};

export type ReplyVendorVendorHasAggregationSelection = {
  __typename?: 'ReplyVendorVendorHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ReplyVendorVendorHasNodeAggregateSelection>;
};

export type ReplyVendorVendorHasNodeAggregateSelection = {
  __typename?: 'ReplyVendorVendorHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type ReplyWhere = {
  AND?: InputMaybe<Array<ReplyWhere>>;
  NOT?: InputMaybe<ReplyWhere>;
  OR?: InputMaybe<Array<ReplyWhere>>;
  clientHas?: InputMaybe<ClientWhere>;
  clientHasAggregate?: InputMaybe<ReplyClientHasAggregateInput>;
  clientHasConnection?: InputMaybe<ReplyClientHasConnectionWhere>;
  clientHasConnection_NOT?: InputMaybe<ReplyClientHasConnectionWhere>;
  clientHas_NOT?: InputMaybe<ClientWhere>;
  communicationticketHas?: InputMaybe<CommunicationTicketWhere>;
  communicationticketHasAggregate?: InputMaybe<ReplyCommunicationticketHasAggregateInput>;
  communicationticketHasConnection?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
  communicationticketHasConnection_NOT?: InputMaybe<ReplyCommunicationticketHasConnectionWhere>;
  communicationticketHas_NOT?: InputMaybe<CommunicationTicketWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  replyMessage?: InputMaybe<Scalars['String']['input']>;
  replyMessage_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  replyMessage_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  replyMessage_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  replyMessage_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  senderEmail_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  senderEmail_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  senderEmail_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderEmail_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<VendorWhere>;
  vendorHasAggregate?: InputMaybe<ReplyVendorHasAggregateInput>;
  vendorHasConnection?: InputMaybe<ReplyVendorHasConnectionWhere>;
  vendorHasConnection_NOT?: InputMaybe<ReplyVendorHasConnectionWhere>;
  vendorHas_NOT?: InputMaybe<VendorWhere>;
};

export type Role = {
  __typename?: 'Role';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<RoleAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: RoleAdminCreatedConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userHas?: Maybe<User>;
  userHasAggregate?: Maybe<RoleUserUserHasAggregationSelection>;
  userHasConnection: RoleUserHasConnection;
};


export type RoleAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type RoleAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type RoleAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleAdminCreatedConnectionSort>>;
  where?: InputMaybe<RoleAdminCreatedConnectionWhere>;
};


export type RoleUserHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type RoleUserHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type RoleUserHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleUserHasConnectionSort>>;
  where?: InputMaybe<RoleUserHasConnectionWhere>;
};

export type RoleAdminAdminCreatedAggregationSelection = {
  __typename?: 'RoleAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RoleAdminAdminCreatedNodeAggregateSelection>;
};

export type RoleAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'RoleAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type RoleAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<RoleAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<RoleAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<RoleAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RoleAdminCreatedNodeAggregationWhereInput>;
};

export type RoleAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type RoleAdminCreatedConnectOrCreateFieldInput = {
  onCreate: RoleAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type RoleAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type RoleAdminCreatedConnection = {
  __typename?: 'RoleAdminCreatedConnection';
  edges: Array<RoleAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RoleAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type RoleAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<RoleAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<RoleAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<RoleAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type RoleAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type RoleAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<RoleAdminCreatedConnectionWhere>;
};

export type RoleAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<RoleAdminCreatedConnectionWhere>;
};

export type RoleAdminCreatedFieldInput = {
  connect?: InputMaybe<RoleAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoleAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<RoleAdminCreatedCreateFieldInput>;
};

export type RoleAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoleAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoleAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoleAdminCreatedNodeAggregationWhereInput>>;
};

export type RoleAdminCreatedRelationship = {
  __typename?: 'RoleAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type RoleAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type RoleAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<RoleAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoleAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<RoleAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<RoleAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<RoleAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<RoleAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<RoleAdminCreatedConnectionWhere>;
};

export type RoleAggregateSelection = {
  __typename?: 'RoleAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type RoleConnectInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedConnectFieldInput>;
  userHas?: InputMaybe<RoleUserHasConnectFieldInput>;
};

export type RoleConnectOrCreateInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedConnectOrCreateFieldInput>;
  userHas?: InputMaybe<RoleUserHasConnectOrCreateFieldInput>;
};

export type RoleConnectOrCreateWhere = {
  node: RoleUniqueWhere;
};

export type RoleConnectWhere = {
  node: RoleWhere;
};

export type RoleCreateInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userHas?: InputMaybe<RoleUserHasFieldInput>;
};

export type RoleDeleteInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedDeleteFieldInput>;
  userHas?: InputMaybe<RoleUserHasDeleteFieldInput>;
};

export type RoleDisconnectInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedDisconnectFieldInput>;
  userHas?: InputMaybe<RoleUserHasDisconnectFieldInput>;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String']['output'];
  node: Role;
};

export type RoleOnCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RoleOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more RoleSort objects to sort Roles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoleSort>>;
};

export type RoleRelationInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedCreateFieldInput>;
  userHas?: InputMaybe<RoleUserHasCreateFieldInput>;
};

/** Fields to sort Roles by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoleSort object. */
export type RoleSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type RoleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RoleUpdateInput = {
  adminCreated?: InputMaybe<RoleAdminCreatedUpdateFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  permissions_POP?: InputMaybe<Scalars['Int']['input']>;
  permissions_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userHas?: InputMaybe<RoleUserHasUpdateFieldInput>;
};

export type RoleUserHasAggregateInput = {
  AND?: InputMaybe<Array<RoleUserHasAggregateInput>>;
  NOT?: InputMaybe<RoleUserHasAggregateInput>;
  OR?: InputMaybe<Array<RoleUserHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RoleUserHasNodeAggregationWhereInput>;
};

export type RoleUserHasConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type RoleUserHasConnectOrCreateFieldInput = {
  onCreate: RoleUserHasConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type RoleUserHasConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type RoleUserHasConnection = {
  __typename?: 'RoleUserHasConnection';
  edges: Array<RoleUserHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RoleUserHasConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type RoleUserHasConnectionWhere = {
  AND?: InputMaybe<Array<RoleUserHasConnectionWhere>>;
  NOT?: InputMaybe<RoleUserHasConnectionWhere>;
  OR?: InputMaybe<Array<RoleUserHasConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type RoleUserHasCreateFieldInput = {
  node: UserCreateInput;
};

export type RoleUserHasDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<RoleUserHasConnectionWhere>;
};

export type RoleUserHasDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<RoleUserHasConnectionWhere>;
};

export type RoleUserHasFieldInput = {
  connect?: InputMaybe<RoleUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoleUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<RoleUserHasCreateFieldInput>;
};

export type RoleUserHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoleUserHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoleUserHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoleUserHasNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleUserHasRelationship = {
  __typename?: 'RoleUserHasRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type RoleUserHasUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type RoleUserHasUpdateFieldInput = {
  connect?: InputMaybe<RoleUserHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoleUserHasConnectOrCreateFieldInput>;
  create?: InputMaybe<RoleUserHasCreateFieldInput>;
  delete?: InputMaybe<RoleUserHasDeleteFieldInput>;
  disconnect?: InputMaybe<RoleUserHasDisconnectFieldInput>;
  update?: InputMaybe<RoleUserHasUpdateConnectionInput>;
  where?: InputMaybe<RoleUserHasConnectionWhere>;
};

export type RoleUserUserHasAggregationSelection = {
  __typename?: 'RoleUserUserHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RoleUserUserHasNodeAggregateSelection>;
};

export type RoleUserUserHasNodeAggregateSelection = {
  __typename?: 'RoleUserUserHasNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type RoleWhere = {
  AND?: InputMaybe<Array<RoleWhere>>;
  NOT?: InputMaybe<RoleWhere>;
  OR?: InputMaybe<Array<RoleWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<RoleAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<RoleAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<RoleAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  permissions_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  userHas?: InputMaybe<UserWhere>;
  userHasAggregate?: InputMaybe<RoleUserHasAggregateInput>;
  userHasConnection?: InputMaybe<RoleUserHasConnectionWhere>;
  userHasConnection_NOT?: InputMaybe<RoleUserHasConnectionWhere>;
  userHas_NOT?: InputMaybe<UserWhere>;
};

export type RolesConnection = {
  __typename?: 'RolesConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum SampleStatus {
  NotSent = 'NOT_SENT',
  OnWay = 'ON_WAY',
  Received = 'RECEIVED'
}

export enum SentBy {
  Admin = 'ADMIN',
  Vendor = 'VENDOR'
}

export type Service = {
  __typename?: 'Service';
  id?: Maybe<Scalars['String']['output']>;
  invoiceHas?: Maybe<Invoice>;
  invoiceHasAggregate?: Maybe<ServiceInvoiceInvoiceHasAggregationSelection>;
  invoiceHasConnection: ServiceInvoiceHasConnection;
  price?: Maybe<Scalars['Int']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};


export type ServiceInvoiceHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<InvoiceOptions>;
  where?: InputMaybe<InvoiceWhere>;
};


export type ServiceInvoiceHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InvoiceWhere>;
};


export type ServiceInvoiceHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ServiceInvoiceHasConnectionSort>>;
  where?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
};

export type ServiceAggregateSelection = {
  __typename?: 'ServiceAggregateSelection';
  count: Scalars['Int']['output'];
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  serviceName: StringAggregateSelectionNullable;
};

export type ServiceConnectInput = {
  invoiceHas?: InputMaybe<ServiceInvoiceHasConnectFieldInput>;
};

export type ServiceConnectOrCreateInput = {
  invoiceHas?: InputMaybe<ServiceInvoiceHasConnectOrCreateFieldInput>;
};

export type ServiceConnectWhere = {
  node: ServiceWhere;
};

export type ServiceCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  invoiceHas?: InputMaybe<ServiceInvoiceHasFieldInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceName?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceDeleteInput = {
  invoiceHas?: InputMaybe<ServiceInvoiceHasDeleteFieldInput>;
};

export type ServiceDisconnectInput = {
  invoiceHas?: InputMaybe<ServiceInvoiceHasDisconnectFieldInput>;
};

export type ServiceEdge = {
  __typename?: 'ServiceEdge';
  cursor: Scalars['String']['output'];
  node: Service;
};

export type ServiceInvoiceHasAggregateInput = {
  AND?: InputMaybe<Array<ServiceInvoiceHasAggregateInput>>;
  NOT?: InputMaybe<ServiceInvoiceHasAggregateInput>;
  OR?: InputMaybe<Array<ServiceInvoiceHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ServiceInvoiceHasNodeAggregationWhereInput>;
};

export type ServiceInvoiceHasConnectFieldInput = {
  connect?: InputMaybe<InvoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<InvoiceConnectWhere>;
};

export type ServiceInvoiceHasConnectOrCreateFieldInput = {
  onCreate: ServiceInvoiceHasConnectOrCreateFieldInputOnCreate;
  where: InvoiceConnectOrCreateWhere;
};

export type ServiceInvoiceHasConnectOrCreateFieldInputOnCreate = {
  node: InvoiceOnCreateInput;
};

export type ServiceInvoiceHasConnection = {
  __typename?: 'ServiceInvoiceHasConnection';
  edges: Array<ServiceInvoiceHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ServiceInvoiceHasConnectionSort = {
  node?: InputMaybe<InvoiceSort>;
};

export type ServiceInvoiceHasConnectionWhere = {
  AND?: InputMaybe<Array<ServiceInvoiceHasConnectionWhere>>;
  NOT?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
  OR?: InputMaybe<Array<ServiceInvoiceHasConnectionWhere>>;
  node?: InputMaybe<InvoiceWhere>;
};

export type ServiceInvoiceHasCreateFieldInput = {
  node: InvoiceCreateInput;
};

export type ServiceInvoiceHasDeleteFieldInput = {
  delete?: InputMaybe<InvoiceDeleteInput>;
  where?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
};

export type ServiceInvoiceHasDisconnectFieldInput = {
  disconnect?: InputMaybe<InvoiceDisconnectInput>;
  where?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
};

export type ServiceInvoiceHasFieldInput = {
  connect?: InputMaybe<ServiceInvoiceHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ServiceInvoiceHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ServiceInvoiceHasCreateFieldInput>;
};

export type ServiceInvoiceHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ServiceInvoiceHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ServiceInvoiceHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ServiceInvoiceHasNodeAggregationWhereInput>>;
  clientAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  priceWithTax_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceInvoiceHasRelationship = {
  __typename?: 'ServiceInvoiceHasRelationship';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

export type ServiceInvoiceHasUpdateConnectionInput = {
  node?: InputMaybe<InvoiceUpdateInput>;
};

export type ServiceInvoiceHasUpdateFieldInput = {
  connect?: InputMaybe<ServiceInvoiceHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<ServiceInvoiceHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ServiceInvoiceHasCreateFieldInput>;
  delete?: InputMaybe<ServiceInvoiceHasDeleteFieldInput>;
  disconnect?: InputMaybe<ServiceInvoiceHasDisconnectFieldInput>;
  update?: InputMaybe<ServiceInvoiceHasUpdateConnectionInput>;
  where?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
};

export type ServiceInvoiceInvoiceHasAggregationSelection = {
  __typename?: 'ServiceInvoiceInvoiceHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ServiceInvoiceInvoiceHasNodeAggregateSelection>;
};

export type ServiceInvoiceInvoiceHasNodeAggregateSelection = {
  __typename?: 'ServiceInvoiceInvoiceHasNodeAggregateSelection';
  clientAddress: StringAggregateSelectionNullable;
  clientEmail: StringAggregateSelectionNullable;
  clientName: StringAggregateSelectionNullable;
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  priceWithTax: IntAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type ServiceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ServiceSort objects to sort Services by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ServiceSort>>;
};

export type ServiceRelationInput = {
  invoiceHas?: InputMaybe<ServiceInvoiceHasCreateFieldInput>;
};

/** Fields to sort Services by. The order in which sorts are applied is not guaranteed when specifying many fields in one ServiceSort object. */
export type ServiceSort = {
  id?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  serviceName?: InputMaybe<SortDirection>;
};

export type ServiceUpdateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  invoiceHas?: InputMaybe<ServiceInvoiceHasUpdateFieldInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  price_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  serviceName?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceWhere = {
  AND?: InputMaybe<Array<ServiceWhere>>;
  NOT?: InputMaybe<ServiceWhere>;
  OR?: InputMaybe<Array<ServiceWhere>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  invoiceHas?: InputMaybe<InvoiceWhere>;
  invoiceHasAggregate?: InputMaybe<ServiceInvoiceHasAggregateInput>;
  invoiceHasConnection?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
  invoiceHasConnection_NOT?: InputMaybe<ServiceInvoiceHasConnectionWhere>;
  invoiceHas_NOT?: InputMaybe<InvoiceWhere>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_GT?: InputMaybe<Scalars['Int']['input']>;
  price_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  price_LT?: InputMaybe<Scalars['Int']['input']>;
  price_LTE?: InputMaybe<Scalars['Int']['input']>;
  serviceName?: InputMaybe<Scalars['String']['input']>;
  serviceName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  serviceName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  serviceName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ServicesConnection = {
  __typename?: 'ServicesConnection';
  edges: Array<ServiceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export enum Status {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Assigned = 'ASSIGNED',
  Complained = 'COMPLAINED',
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  UnderReview = 'UNDER_REVIEW'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type SupportTicket = {
  __typename?: 'SupportTicket';
  adminCreated?: Maybe<Admin>;
  adminCreatedAggregate?: Maybe<SupportTicketAdminAdminCreatedAggregationSelection>;
  adminCreatedConnection: SupportTicketAdminCreatedConnection;
  clientHas?: Maybe<Client>;
  clientHasAggregate?: Maybe<SupportTicketClientClientHasAggregationSelection>;
  clientHasConnection: SupportTicketClientHasConnection;
  id: Scalars['ID']['output'];
  ticket: Scalars['String']['output'];
  vendorHas?: Maybe<Vendor>;
  vendorHasAggregate?: Maybe<SupportTicketVendorVendorHasAggregationSelection>;
  vendorHasConnection: SupportTicketVendorHasConnection;
};


export type SupportTicketAdminCreatedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type SupportTicketAdminCreatedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type SupportTicketAdminCreatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportTicketAdminCreatedConnectionSort>>;
  where?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
};


export type SupportTicketClientHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type SupportTicketClientHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type SupportTicketClientHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportTicketClientHasConnectionSort>>;
  where?: InputMaybe<SupportTicketClientHasConnectionWhere>;
};


export type SupportTicketVendorHasArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type SupportTicketVendorHasAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type SupportTicketVendorHasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportTicketVendorHasConnectionSort>>;
  where?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
};

export type SupportTicketAdminAdminCreatedAggregationSelection = {
  __typename?: 'SupportTicketAdminAdminCreatedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SupportTicketAdminAdminCreatedNodeAggregateSelection>;
};

export type SupportTicketAdminAdminCreatedNodeAggregateSelection = {
  __typename?: 'SupportTicketAdminAdminCreatedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type SupportTicketAdminCreatedAggregateInput = {
  AND?: InputMaybe<Array<SupportTicketAdminCreatedAggregateInput>>;
  NOT?: InputMaybe<SupportTicketAdminCreatedAggregateInput>;
  OR?: InputMaybe<Array<SupportTicketAdminCreatedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SupportTicketAdminCreatedNodeAggregationWhereInput>;
};

export type SupportTicketAdminCreatedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type SupportTicketAdminCreatedConnectOrCreateFieldInput = {
  onCreate: SupportTicketAdminCreatedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type SupportTicketAdminCreatedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type SupportTicketAdminCreatedConnection = {
  __typename?: 'SupportTicketAdminCreatedConnection';
  edges: Array<SupportTicketAdminCreatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SupportTicketAdminCreatedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type SupportTicketAdminCreatedConnectionWhere = {
  AND?: InputMaybe<Array<SupportTicketAdminCreatedConnectionWhere>>;
  NOT?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
  OR?: InputMaybe<Array<SupportTicketAdminCreatedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type SupportTicketAdminCreatedCreateFieldInput = {
  node: AdminCreateInput;
};

export type SupportTicketAdminCreatedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
};

export type SupportTicketAdminCreatedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
};

export type SupportTicketAdminCreatedFieldInput = {
  connect?: InputMaybe<SupportTicketAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<SupportTicketAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<SupportTicketAdminCreatedCreateFieldInput>;
};

export type SupportTicketAdminCreatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SupportTicketAdminCreatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SupportTicketAdminCreatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SupportTicketAdminCreatedNodeAggregationWhereInput>>;
};

export type SupportTicketAdminCreatedRelationship = {
  __typename?: 'SupportTicketAdminCreatedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type SupportTicketAdminCreatedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type SupportTicketAdminCreatedUpdateFieldInput = {
  connect?: InputMaybe<SupportTicketAdminCreatedConnectFieldInput>;
  connectOrCreate?: InputMaybe<SupportTicketAdminCreatedConnectOrCreateFieldInput>;
  create?: InputMaybe<SupportTicketAdminCreatedCreateFieldInput>;
  delete?: InputMaybe<SupportTicketAdminCreatedDeleteFieldInput>;
  disconnect?: InputMaybe<SupportTicketAdminCreatedDisconnectFieldInput>;
  update?: InputMaybe<SupportTicketAdminCreatedUpdateConnectionInput>;
  where?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
};

export type SupportTicketAggregateSelection = {
  __typename?: 'SupportTicketAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type SupportTicketClientClientHasAggregationSelection = {
  __typename?: 'SupportTicketClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SupportTicketClientClientHasNodeAggregateSelection>;
};

export type SupportTicketClientClientHasNodeAggregateSelection = {
  __typename?: 'SupportTicketClientClientHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type SupportTicketClientHasAggregateInput = {
  AND?: InputMaybe<Array<SupportTicketClientHasAggregateInput>>;
  NOT?: InputMaybe<SupportTicketClientHasAggregateInput>;
  OR?: InputMaybe<Array<SupportTicketClientHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SupportTicketClientHasNodeAggregationWhereInput>;
};

export type SupportTicketClientHasConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type SupportTicketClientHasConnectOrCreateFieldInput = {
  onCreate: SupportTicketClientHasConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type SupportTicketClientHasConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type SupportTicketClientHasConnection = {
  __typename?: 'SupportTicketClientHasConnection';
  edges: Array<SupportTicketClientHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SupportTicketClientHasConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type SupportTicketClientHasConnectionWhere = {
  AND?: InputMaybe<Array<SupportTicketClientHasConnectionWhere>>;
  NOT?: InputMaybe<SupportTicketClientHasConnectionWhere>;
  OR?: InputMaybe<Array<SupportTicketClientHasConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type SupportTicketClientHasCreateFieldInput = {
  node: ClientCreateInput;
};

export type SupportTicketClientHasDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<SupportTicketClientHasConnectionWhere>;
};

export type SupportTicketClientHasDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<SupportTicketClientHasConnectionWhere>;
};

export type SupportTicketClientHasFieldInput = {
  connect?: InputMaybe<SupportTicketClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<SupportTicketClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<SupportTicketClientHasCreateFieldInput>;
};

export type SupportTicketClientHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SupportTicketClientHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SupportTicketClientHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SupportTicketClientHasNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SupportTicketClientHasRelationship = {
  __typename?: 'SupportTicketClientHasRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type SupportTicketClientHasUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type SupportTicketClientHasUpdateFieldInput = {
  connect?: InputMaybe<SupportTicketClientHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<SupportTicketClientHasConnectOrCreateFieldInput>;
  create?: InputMaybe<SupportTicketClientHasCreateFieldInput>;
  delete?: InputMaybe<SupportTicketClientHasDeleteFieldInput>;
  disconnect?: InputMaybe<SupportTicketClientHasDisconnectFieldInput>;
  update?: InputMaybe<SupportTicketClientHasUpdateConnectionInput>;
  where?: InputMaybe<SupportTicketClientHasConnectionWhere>;
};

export type SupportTicketConnectInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedConnectFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasConnectFieldInput>;
  vendorHas?: InputMaybe<SupportTicketVendorHasConnectFieldInput>;
};

export type SupportTicketConnectOrCreateInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedConnectOrCreateFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasConnectOrCreateFieldInput>;
  vendorHas?: InputMaybe<SupportTicketVendorHasConnectOrCreateFieldInput>;
};

export type SupportTicketConnectOrCreateWhere = {
  node: SupportTicketUniqueWhere;
};

export type SupportTicketConnectWhere = {
  node: SupportTicketWhere;
};

export type SupportTicketCreateInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasFieldInput>;
  ticket?: Scalars['String']['input'];
  vendorHas?: InputMaybe<SupportTicketVendorHasFieldInput>;
};

export type SupportTicketDeleteInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedDeleteFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasDeleteFieldInput>;
  vendorHas?: InputMaybe<SupportTicketVendorHasDeleteFieldInput>;
};

export type SupportTicketDisconnectInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedDisconnectFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasDisconnectFieldInput>;
  vendorHas?: InputMaybe<SupportTicketVendorHasDisconnectFieldInput>;
};

export type SupportTicketEdge = {
  __typename?: 'SupportTicketEdge';
  cursor: Scalars['String']['output'];
  node: SupportTicket;
};

export type SupportTicketOnCreateInput = {
  ticket?: Scalars['String']['input'];
};

export type SupportTicketOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SupportTicketSort objects to sort SupportTickets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SupportTicketSort>>;
};

export type SupportTicketRelationInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedCreateFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasCreateFieldInput>;
  vendorHas?: InputMaybe<SupportTicketVendorHasCreateFieldInput>;
};

/** Fields to sort SupportTickets by. The order in which sorts are applied is not guaranteed when specifying many fields in one SupportTicketSort object. */
export type SupportTicketSort = {
  id?: InputMaybe<SortDirection>;
  ticket?: InputMaybe<SortDirection>;
};

export type SupportTicketUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SupportTicketUpdateInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedUpdateFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasUpdateFieldInput>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<SupportTicketVendorHasUpdateFieldInput>;
};

export type SupportTicketVendorHasAggregateInput = {
  AND?: InputMaybe<Array<SupportTicketVendorHasAggregateInput>>;
  NOT?: InputMaybe<SupportTicketVendorHasAggregateInput>;
  OR?: InputMaybe<Array<SupportTicketVendorHasAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SupportTicketVendorHasNodeAggregationWhereInput>;
};

export type SupportTicketVendorHasConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type SupportTicketVendorHasConnectOrCreateFieldInput = {
  onCreate: SupportTicketVendorHasConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type SupportTicketVendorHasConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type SupportTicketVendorHasConnection = {
  __typename?: 'SupportTicketVendorHasConnection';
  edges: Array<SupportTicketVendorHasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SupportTicketVendorHasConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type SupportTicketVendorHasConnectionWhere = {
  AND?: InputMaybe<Array<SupportTicketVendorHasConnectionWhere>>;
  NOT?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
  OR?: InputMaybe<Array<SupportTicketVendorHasConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type SupportTicketVendorHasCreateFieldInput = {
  node: VendorCreateInput;
};

export type SupportTicketVendorHasDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
};

export type SupportTicketVendorHasDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
};

export type SupportTicketVendorHasFieldInput = {
  connect?: InputMaybe<SupportTicketVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<SupportTicketVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<SupportTicketVendorHasCreateFieldInput>;
};

export type SupportTicketVendorHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SupportTicketVendorHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SupportTicketVendorHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SupportTicketVendorHasNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SupportTicketVendorHasRelationship = {
  __typename?: 'SupportTicketVendorHasRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type SupportTicketVendorHasUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type SupportTicketVendorHasUpdateFieldInput = {
  connect?: InputMaybe<SupportTicketVendorHasConnectFieldInput>;
  connectOrCreate?: InputMaybe<SupportTicketVendorHasConnectOrCreateFieldInput>;
  create?: InputMaybe<SupportTicketVendorHasCreateFieldInput>;
  delete?: InputMaybe<SupportTicketVendorHasDeleteFieldInput>;
  disconnect?: InputMaybe<SupportTicketVendorHasDisconnectFieldInput>;
  update?: InputMaybe<SupportTicketVendorHasUpdateConnectionInput>;
  where?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
};

export type SupportTicketVendorVendorHasAggregationSelection = {
  __typename?: 'SupportTicketVendorVendorHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SupportTicketVendorVendorHasNodeAggregateSelection>;
};

export type SupportTicketVendorVendorHasNodeAggregateSelection = {
  __typename?: 'SupportTicketVendorVendorHasNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type SupportTicketWhere = {
  AND?: InputMaybe<Array<SupportTicketWhere>>;
  NOT?: InputMaybe<SupportTicketWhere>;
  OR?: InputMaybe<Array<SupportTicketWhere>>;
  adminCreated?: InputMaybe<AdminWhere>;
  adminCreatedAggregate?: InputMaybe<SupportTicketAdminCreatedAggregateInput>;
  adminCreatedConnection?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
  adminCreatedConnection_NOT?: InputMaybe<SupportTicketAdminCreatedConnectionWhere>;
  adminCreated_NOT?: InputMaybe<AdminWhere>;
  clientHas?: InputMaybe<ClientWhere>;
  clientHasAggregate?: InputMaybe<SupportTicketClientHasAggregateInput>;
  clientHasConnection?: InputMaybe<SupportTicketClientHasConnectionWhere>;
  clientHasConnection_NOT?: InputMaybe<SupportTicketClientHasConnectionWhere>;
  clientHas_NOT?: InputMaybe<ClientWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticket_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  ticket_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  ticket_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  ticket_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  vendorHas?: InputMaybe<VendorWhere>;
  vendorHasAggregate?: InputMaybe<SupportTicketVendorHasAggregateInput>;
  vendorHasConnection?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
  vendorHasConnection_NOT?: InputMaybe<SupportTicketVendorHasConnectionWhere>;
  vendorHas_NOT?: InputMaybe<VendorWhere>;
};

export type SupportTicketsConnection = {
  __typename?: 'SupportTicketsConnection';
  edges: Array<SupportTicketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UpdateAdminsMutationResponse = {
  __typename?: 'UpdateAdminsMutationResponse';
  admins: Array<Admin>;
  info: UpdateInfo;
};

export type UpdateClientsMutationResponse = {
  __typename?: 'UpdateClientsMutationResponse';
  clients: Array<Client>;
  info: UpdateInfo;
};

export type UpdateCommunicationTicketsMutationResponse = {
  __typename?: 'UpdateCommunicationTicketsMutationResponse';
  communicationTickets: Array<CommunicationTicket>;
  info: UpdateInfo;
};

export type UpdateCountersMutationResponse = {
  __typename?: 'UpdateCountersMutationResponse';
  counters: Array<Counter>;
  info: UpdateInfo;
};

export type UpdateDocumentsMutationResponse = {
  __typename?: 'UpdateDocumentsMutationResponse';
  documents: Array<Documents>;
  info: UpdateInfo;
};

export type UpdateEmployeesMutationResponse = {
  __typename?: 'UpdateEmployeesMutationResponse';
  employees: Array<Employee>;
  info: UpdateInfo;
};

export type UpdateFilesMutationResponse = {
  __typename?: 'UpdateFilesMutationResponse';
  files: Array<Files>;
  info: UpdateInfo;
};

export type UpdateImagesMutationResponse = {
  __typename?: 'UpdateImagesMutationResponse';
  images: Array<Images>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateInvoicesMutationResponse = {
  __typename?: 'UpdateInvoicesMutationResponse';
  info: UpdateInfo;
  invoices: Array<Invoice>;
};

export type UpdateLeadsMutationResponse = {
  __typename?: 'UpdateLeadsMutationResponse';
  info: UpdateInfo;
  leads: Array<Leads>;
};

export type UpdateManagementsMutationResponse = {
  __typename?: 'UpdateManagementsMutationResponse';
  info: UpdateInfo;
  managements: Array<Management>;
};

export type UpdateModuleTicketsMutationResponse = {
  __typename?: 'UpdateModuleTicketsMutationResponse';
  info: UpdateInfo;
  moduleTickets: Array<ModuleTicket>;
};

export type UpdateModulesMutationResponse = {
  __typename?: 'UpdateModulesMutationResponse';
  info: UpdateInfo;
  modules: Array<Module>;
};

export type UpdateNotificationsMutationResponse = {
  __typename?: 'UpdateNotificationsMutationResponse';
  info: UpdateInfo;
  notifications: Array<Notification>;
};

export type UpdatePagesMutationResponse = {
  __typename?: 'UpdatePagesMutationResponse';
  info: UpdateInfo;
  pages: Array<Page>;
};

export type UpdateProjectTicketsMutationResponse = {
  __typename?: 'UpdateProjectTicketsMutationResponse';
  info: UpdateInfo;
  projectTickets: Array<ProjectTicket>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: 'UpdateProjectsMutationResponse';
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateRepliesMutationResponse = {
  __typename?: 'UpdateRepliesMutationResponse';
  info: UpdateInfo;
  replies: Array<Reply>;
};

export type UpdateRolesMutationResponse = {
  __typename?: 'UpdateRolesMutationResponse';
  info: UpdateInfo;
  roles: Array<Role>;
};

export type UpdateServicesMutationResponse = {
  __typename?: 'UpdateServicesMutationResponse';
  info: UpdateInfo;
  services: Array<Service>;
};

export type UpdateSupportTicketsMutationResponse = {
  __typename?: 'UpdateSupportTicketsMutationResponse';
  info: UpdateInfo;
  supportTickets: Array<SupportTicket>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type UpdateVendorsMutationResponse = {
  __typename?: 'UpdateVendorsMutationResponse';
  info: UpdateInfo;
  vendors: Array<Vendor>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyEmail?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gstNumber?: Maybe<Scalars['String']['output']>;
  hasDocuments?: Maybe<Documents>;
  hasDocumentsAggregate?: Maybe<UserDocumentsHasDocumentsAggregationSelection>;
  hasDocumentsConnection: UserHasDocumentsConnection;
  hasEmployee?: Maybe<Employee>;
  hasEmployeeAggregate?: Maybe<UserEmployeeHasEmployeeAggregationSelection>;
  hasEmployeeConnection: UserHasEmployeeConnection;
  hasModuleticket?: Maybe<ModuleTicket>;
  hasModuleticketAggregate?: Maybe<UserModuleTicketHasModuleticketAggregationSelection>;
  hasModuleticketConnection: UserHasModuleticketConnection;
  hasRole?: Maybe<Role>;
  hasRoleAggregate?: Maybe<UserRoleHasRoleAggregationSelection>;
  hasRoleConnection: UserHasRoleConnection;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isAdmin?: Maybe<Admin>;
  isAdminAggregate?: Maybe<UserAdminIsAdminAggregationSelection>;
  isAdminConnection: UserIsAdminConnection;
  isClient?: Maybe<Client>;
  isClientAggregate?: Maybe<UserClientIsClientAggregationSelection>;
  isClientConnection: UserIsClientConnection;
  isVendor?: Maybe<Vendor>;
  isVendorAggregate?: Maybe<UserVendorIsVendorAggregationSelection>;
  isVendorConnection: UserIsVendorConnection;
  name?: Maybe<Scalars['String']['output']>;
  pan?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  user_type?: Maybe<UserType>;
  zip?: Maybe<Scalars['String']['output']>;
};


export type UserHasDocumentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DocumentsOptions>;
  where?: InputMaybe<DocumentsWhere>;
};


export type UserHasDocumentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocumentsWhere>;
};


export type UserHasDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserHasDocumentsConnectionSort>>;
  where?: InputMaybe<UserHasDocumentsConnectionWhere>;
};


export type UserHasEmployeeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EmployeeOptions>;
  where?: InputMaybe<EmployeeWhere>;
};


export type UserHasEmployeeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EmployeeWhere>;
};


export type UserHasEmployeeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserHasEmployeeConnectionSort>>;
  where?: InputMaybe<UserHasEmployeeConnectionWhere>;
};


export type UserHasModuleticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type UserHasModuleticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type UserHasModuleticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserHasModuleticketConnectionSort>>;
  where?: InputMaybe<UserHasModuleticketConnectionWhere>;
};


export type UserHasRoleArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RoleOptions>;
  where?: InputMaybe<RoleWhere>;
};


export type UserHasRoleAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RoleWhere>;
};


export type UserHasRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserHasRoleConnectionSort>>;
  where?: InputMaybe<UserHasRoleConnectionWhere>;
};


export type UserIsAdminArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type UserIsAdminAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type UserIsAdminConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserIsAdminConnectionSort>>;
  where?: InputMaybe<UserIsAdminConnectionWhere>;
};


export type UserIsClientArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type UserIsClientAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ClientWhere>;
};


export type UserIsClientConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserIsClientConnectionSort>>;
  where?: InputMaybe<UserIsClientConnectionWhere>;
};


export type UserIsVendorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VendorOptions>;
  where?: InputMaybe<VendorWhere>;
};


export type UserIsVendorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VendorWhere>;
};


export type UserIsVendorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserIsVendorConnectionSort>>;
  where?: InputMaybe<UserIsVendorConnectionWhere>;
};

export type UserAdminIsAdminAggregationSelection = {
  __typename?: 'UserAdminIsAdminAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserAdminIsAdminNodeAggregateSelection>;
};

export type UserAdminIsAdminNodeAggregateSelection = {
  __typename?: 'UserAdminIsAdminNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type UserClientIsClientAggregationSelection = {
  __typename?: 'UserClientIsClientAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserClientIsClientNodeAggregateSelection>;
};

export type UserClientIsClientNodeAggregateSelection = {
  __typename?: 'UserClientIsClientNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type UserConnectInput = {
  hasDocuments?: InputMaybe<UserHasDocumentsConnectFieldInput>;
  hasEmployee?: InputMaybe<UserHasEmployeeConnectFieldInput>;
  hasModuleticket?: InputMaybe<UserHasModuleticketConnectFieldInput>;
  hasRole?: InputMaybe<UserHasRoleConnectFieldInput>;
  isAdmin?: InputMaybe<UserIsAdminConnectFieldInput>;
  isClient?: InputMaybe<UserIsClientConnectFieldInput>;
  isVendor?: InputMaybe<UserIsVendorConnectFieldInput>;
};

export type UserConnectOrCreateInput = {
  hasModuleticket?: InputMaybe<UserHasModuleticketConnectOrCreateFieldInput>;
  hasRole?: InputMaybe<UserHasRoleConnectOrCreateFieldInput>;
  isAdmin?: InputMaybe<UserIsAdminConnectOrCreateFieldInput>;
  isClient?: InputMaybe<UserIsClientConnectOrCreateFieldInput>;
  isVendor?: InputMaybe<UserIsVendorConnectOrCreateFieldInput>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<UserHasDocumentsFieldInput>;
  hasEmployee?: InputMaybe<UserHasEmployeeFieldInput>;
  hasModuleticket?: InputMaybe<UserHasModuleticketFieldInput>;
  hasRole?: InputMaybe<UserHasRoleFieldInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<UserIsAdminFieldInput>;
  isClient?: InputMaybe<UserIsClientFieldInput>;
  isVendor?: InputMaybe<UserIsVendorFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  pan?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  user_type?: InputMaybe<UserType>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserDeleteInput = {
  hasDocuments?: InputMaybe<UserHasDocumentsDeleteFieldInput>;
  hasEmployee?: InputMaybe<UserHasEmployeeDeleteFieldInput>;
  hasModuleticket?: InputMaybe<UserHasModuleticketDeleteFieldInput>;
  hasRole?: InputMaybe<UserHasRoleDeleteFieldInput>;
  isAdmin?: InputMaybe<UserIsAdminDeleteFieldInput>;
  isClient?: InputMaybe<UserIsClientDeleteFieldInput>;
  isVendor?: InputMaybe<UserIsVendorDeleteFieldInput>;
};

export type UserDisconnectInput = {
  hasDocuments?: InputMaybe<UserHasDocumentsDisconnectFieldInput>;
  hasEmployee?: InputMaybe<UserHasEmployeeDisconnectFieldInput>;
  hasModuleticket?: InputMaybe<UserHasModuleticketDisconnectFieldInput>;
  hasRole?: InputMaybe<UserHasRoleDisconnectFieldInput>;
  isAdmin?: InputMaybe<UserIsAdminDisconnectFieldInput>;
  isClient?: InputMaybe<UserIsClientDisconnectFieldInput>;
  isVendor?: InputMaybe<UserIsVendorDisconnectFieldInput>;
};

export type UserDocumentsHasDocumentsAggregationSelection = {
  __typename?: 'UserDocumentsHasDocumentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserDocumentsHasDocumentsNodeAggregateSelection>;
};

export type UserDocumentsHasDocumentsNodeAggregateSelection = {
  __typename?: 'UserDocumentsHasDocumentsNodeAggregateSelection';
  id: StringAggregateSelectionNullable;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserEmployeeHasEmployeeAggregationSelection = {
  __typename?: 'UserEmployeeHasEmployeeAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserEmployeeHasEmployeeNodeAggregateSelection>;
};

export type UserEmployeeHasEmployeeNodeAggregateSelection = {
  __typename?: 'UserEmployeeHasEmployeeNodeAggregateSelection';
  employerEmail: StringAggregateSelectionNonNullable;
  id: StringAggregateSelectionNonNullable;
};

export type UserHasDocumentsAggregateInput = {
  AND?: InputMaybe<Array<UserHasDocumentsAggregateInput>>;
  NOT?: InputMaybe<UserHasDocumentsAggregateInput>;
  OR?: InputMaybe<Array<UserHasDocumentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserHasDocumentsNodeAggregationWhereInput>;
};

export type UserHasDocumentsConnectFieldInput = {
  connect?: InputMaybe<DocumentsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DocumentsConnectWhere>;
};

export type UserHasDocumentsConnection = {
  __typename?: 'UserHasDocumentsConnection';
  edges: Array<UserHasDocumentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserHasDocumentsConnectionSort = {
  node?: InputMaybe<DocumentsSort>;
};

export type UserHasDocumentsConnectionWhere = {
  AND?: InputMaybe<Array<UserHasDocumentsConnectionWhere>>;
  NOT?: InputMaybe<UserHasDocumentsConnectionWhere>;
  OR?: InputMaybe<Array<UserHasDocumentsConnectionWhere>>;
  node?: InputMaybe<DocumentsWhere>;
};

export type UserHasDocumentsCreateFieldInput = {
  node: DocumentsCreateInput;
};

export type UserHasDocumentsDeleteFieldInput = {
  delete?: InputMaybe<DocumentsDeleteInput>;
  where?: InputMaybe<UserHasDocumentsConnectionWhere>;
};

export type UserHasDocumentsDisconnectFieldInput = {
  disconnect?: InputMaybe<DocumentsDisconnectInput>;
  where?: InputMaybe<UserHasDocumentsConnectionWhere>;
};

export type UserHasDocumentsFieldInput = {
  connect?: InputMaybe<UserHasDocumentsConnectFieldInput>;
  create?: InputMaybe<UserHasDocumentsCreateFieldInput>;
};

export type UserHasDocumentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasDocumentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasDocumentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserHasDocumentsNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserHasDocumentsRelationship = {
  __typename?: 'UserHasDocumentsRelationship';
  cursor: Scalars['String']['output'];
  node: Documents;
};

export type UserHasDocumentsUpdateConnectionInput = {
  node?: InputMaybe<DocumentsUpdateInput>;
};

export type UserHasDocumentsUpdateFieldInput = {
  connect?: InputMaybe<UserHasDocumentsConnectFieldInput>;
  create?: InputMaybe<UserHasDocumentsCreateFieldInput>;
  delete?: InputMaybe<UserHasDocumentsDeleteFieldInput>;
  disconnect?: InputMaybe<UserHasDocumentsDisconnectFieldInput>;
  update?: InputMaybe<UserHasDocumentsUpdateConnectionInput>;
  where?: InputMaybe<UserHasDocumentsConnectionWhere>;
};

export type UserHasEmployeeAggregateInput = {
  AND?: InputMaybe<Array<UserHasEmployeeAggregateInput>>;
  NOT?: InputMaybe<UserHasEmployeeAggregateInput>;
  OR?: InputMaybe<Array<UserHasEmployeeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserHasEmployeeNodeAggregationWhereInput>;
};

export type UserHasEmployeeConnectFieldInput = {
  connect?: InputMaybe<EmployeeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EmployeeConnectWhere>;
};

export type UserHasEmployeeConnection = {
  __typename?: 'UserHasEmployeeConnection';
  edges: Array<UserHasEmployeeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserHasEmployeeConnectionSort = {
  node?: InputMaybe<EmployeeSort>;
};

export type UserHasEmployeeConnectionWhere = {
  AND?: InputMaybe<Array<UserHasEmployeeConnectionWhere>>;
  NOT?: InputMaybe<UserHasEmployeeConnectionWhere>;
  OR?: InputMaybe<Array<UserHasEmployeeConnectionWhere>>;
  node?: InputMaybe<EmployeeWhere>;
};

export type UserHasEmployeeCreateFieldInput = {
  node: EmployeeCreateInput;
};

export type UserHasEmployeeDeleteFieldInput = {
  delete?: InputMaybe<EmployeeDeleteInput>;
  where?: InputMaybe<UserHasEmployeeConnectionWhere>;
};

export type UserHasEmployeeDisconnectFieldInput = {
  disconnect?: InputMaybe<EmployeeDisconnectInput>;
  where?: InputMaybe<UserHasEmployeeConnectionWhere>;
};

export type UserHasEmployeeFieldInput = {
  connect?: InputMaybe<UserHasEmployeeConnectFieldInput>;
  create?: InputMaybe<UserHasEmployeeCreateFieldInput>;
};

export type UserHasEmployeeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasEmployeeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasEmployeeNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserHasEmployeeNodeAggregationWhereInput>>;
  employerEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  employerEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  employerEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  employerEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  employerEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  employerEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  employerEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserHasEmployeeRelationship = {
  __typename?: 'UserHasEmployeeRelationship';
  cursor: Scalars['String']['output'];
  node: Employee;
};

export type UserHasEmployeeUpdateConnectionInput = {
  node?: InputMaybe<EmployeeUpdateInput>;
};

export type UserHasEmployeeUpdateFieldInput = {
  connect?: InputMaybe<UserHasEmployeeConnectFieldInput>;
  create?: InputMaybe<UserHasEmployeeCreateFieldInput>;
  delete?: InputMaybe<UserHasEmployeeDeleteFieldInput>;
  disconnect?: InputMaybe<UserHasEmployeeDisconnectFieldInput>;
  update?: InputMaybe<UserHasEmployeeUpdateConnectionInput>;
  where?: InputMaybe<UserHasEmployeeConnectionWhere>;
};

export type UserHasModuleticketAggregateInput = {
  AND?: InputMaybe<Array<UserHasModuleticketAggregateInput>>;
  NOT?: InputMaybe<UserHasModuleticketAggregateInput>;
  OR?: InputMaybe<Array<UserHasModuleticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserHasModuleticketNodeAggregationWhereInput>;
};

export type UserHasModuleticketConnectFieldInput = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleTicketConnectWhere>;
};

export type UserHasModuleticketConnectOrCreateFieldInput = {
  onCreate: UserHasModuleticketConnectOrCreateFieldInputOnCreate;
  where: ModuleTicketConnectOrCreateWhere;
};

export type UserHasModuleticketConnectOrCreateFieldInputOnCreate = {
  node: ModuleTicketOnCreateInput;
};

export type UserHasModuleticketConnection = {
  __typename?: 'UserHasModuleticketConnection';
  edges: Array<UserHasModuleticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserHasModuleticketConnectionSort = {
  node?: InputMaybe<ModuleTicketSort>;
};

export type UserHasModuleticketConnectionWhere = {
  AND?: InputMaybe<Array<UserHasModuleticketConnectionWhere>>;
  NOT?: InputMaybe<UserHasModuleticketConnectionWhere>;
  OR?: InputMaybe<Array<UserHasModuleticketConnectionWhere>>;
  node?: InputMaybe<ModuleTicketWhere>;
};

export type UserHasModuleticketCreateFieldInput = {
  node: ModuleTicketCreateInput;
};

export type UserHasModuleticketDeleteFieldInput = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<UserHasModuleticketConnectionWhere>;
};

export type UserHasModuleticketDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  where?: InputMaybe<UserHasModuleticketConnectionWhere>;
};

export type UserHasModuleticketFieldInput = {
  connect?: InputMaybe<UserHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<UserHasModuleticketCreateFieldInput>;
};

export type UserHasModuleticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasModuleticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasModuleticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserHasModuleticketNodeAggregationWhereInput>>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserHasModuleticketRelationship = {
  __typename?: 'UserHasModuleticketRelationship';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type UserHasModuleticketUpdateConnectionInput = {
  node?: InputMaybe<ModuleTicketUpdateInput>;
};

export type UserHasModuleticketUpdateFieldInput = {
  connect?: InputMaybe<UserHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<UserHasModuleticketCreateFieldInput>;
  delete?: InputMaybe<UserHasModuleticketDeleteFieldInput>;
  disconnect?: InputMaybe<UserHasModuleticketDisconnectFieldInput>;
  update?: InputMaybe<UserHasModuleticketUpdateConnectionInput>;
  where?: InputMaybe<UserHasModuleticketConnectionWhere>;
};

export type UserHasRoleAggregateInput = {
  AND?: InputMaybe<Array<UserHasRoleAggregateInput>>;
  NOT?: InputMaybe<UserHasRoleAggregateInput>;
  OR?: InputMaybe<Array<UserHasRoleAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserHasRoleNodeAggregationWhereInput>;
};

export type UserHasRoleConnectFieldInput = {
  connect?: InputMaybe<RoleConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RoleConnectWhere>;
};

export type UserHasRoleConnectOrCreateFieldInput = {
  onCreate: UserHasRoleConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
};

export type UserHasRoleConnectOrCreateFieldInputOnCreate = {
  node: RoleOnCreateInput;
};

export type UserHasRoleConnection = {
  __typename?: 'UserHasRoleConnection';
  edges: Array<UserHasRoleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserHasRoleConnectionSort = {
  node?: InputMaybe<RoleSort>;
};

export type UserHasRoleConnectionWhere = {
  AND?: InputMaybe<Array<UserHasRoleConnectionWhere>>;
  NOT?: InputMaybe<UserHasRoleConnectionWhere>;
  OR?: InputMaybe<Array<UserHasRoleConnectionWhere>>;
  node?: InputMaybe<RoleWhere>;
};

export type UserHasRoleCreateFieldInput = {
  node: RoleCreateInput;
};

export type UserHasRoleDeleteFieldInput = {
  delete?: InputMaybe<RoleDeleteInput>;
  where?: InputMaybe<UserHasRoleConnectionWhere>;
};

export type UserHasRoleDisconnectFieldInput = {
  disconnect?: InputMaybe<RoleDisconnectInput>;
  where?: InputMaybe<UserHasRoleConnectionWhere>;
};

export type UserHasRoleFieldInput = {
  connect?: InputMaybe<UserHasRoleConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserHasRoleConnectOrCreateFieldInput>;
  create?: InputMaybe<UserHasRoleCreateFieldInput>;
};

export type UserHasRoleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasRoleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasRoleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserHasRoleNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserHasRoleRelationship = {
  __typename?: 'UserHasRoleRelationship';
  cursor: Scalars['String']['output'];
  node: Role;
};

export type UserHasRoleUpdateConnectionInput = {
  node?: InputMaybe<RoleUpdateInput>;
};

export type UserHasRoleUpdateFieldInput = {
  connect?: InputMaybe<UserHasRoleConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserHasRoleConnectOrCreateFieldInput>;
  create?: InputMaybe<UserHasRoleCreateFieldInput>;
  delete?: InputMaybe<UserHasRoleDeleteFieldInput>;
  disconnect?: InputMaybe<UserHasRoleDisconnectFieldInput>;
  update?: InputMaybe<UserHasRoleUpdateConnectionInput>;
  where?: InputMaybe<UserHasRoleConnectionWhere>;
};

export type UserIsAdminAggregateInput = {
  AND?: InputMaybe<Array<UserIsAdminAggregateInput>>;
  NOT?: InputMaybe<UserIsAdminAggregateInput>;
  OR?: InputMaybe<Array<UserIsAdminAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserIsAdminNodeAggregationWhereInput>;
};

export type UserIsAdminConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type UserIsAdminConnectOrCreateFieldInput = {
  onCreate: UserIsAdminConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type UserIsAdminConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type UserIsAdminConnection = {
  __typename?: 'UserIsAdminConnection';
  edges: Array<UserIsAdminRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserIsAdminConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type UserIsAdminConnectionWhere = {
  AND?: InputMaybe<Array<UserIsAdminConnectionWhere>>;
  NOT?: InputMaybe<UserIsAdminConnectionWhere>;
  OR?: InputMaybe<Array<UserIsAdminConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type UserIsAdminCreateFieldInput = {
  node: AdminCreateInput;
};

export type UserIsAdminDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<UserIsAdminConnectionWhere>;
};

export type UserIsAdminDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<UserIsAdminConnectionWhere>;
};

export type UserIsAdminFieldInput = {
  connect?: InputMaybe<UserIsAdminConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserIsAdminConnectOrCreateFieldInput>;
  create?: InputMaybe<UserIsAdminCreateFieldInput>;
};

export type UserIsAdminNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserIsAdminNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserIsAdminNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserIsAdminNodeAggregationWhereInput>>;
};

export type UserIsAdminRelationship = {
  __typename?: 'UserIsAdminRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type UserIsAdminUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type UserIsAdminUpdateFieldInput = {
  connect?: InputMaybe<UserIsAdminConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserIsAdminConnectOrCreateFieldInput>;
  create?: InputMaybe<UserIsAdminCreateFieldInput>;
  delete?: InputMaybe<UserIsAdminDeleteFieldInput>;
  disconnect?: InputMaybe<UserIsAdminDisconnectFieldInput>;
  update?: InputMaybe<UserIsAdminUpdateConnectionInput>;
  where?: InputMaybe<UserIsAdminConnectionWhere>;
};

export type UserIsClientAggregateInput = {
  AND?: InputMaybe<Array<UserIsClientAggregateInput>>;
  NOT?: InputMaybe<UserIsClientAggregateInput>;
  OR?: InputMaybe<Array<UserIsClientAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserIsClientNodeAggregationWhereInput>;
};

export type UserIsClientConnectFieldInput = {
  connect?: InputMaybe<ClientConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ClientConnectWhere>;
};

export type UserIsClientConnectOrCreateFieldInput = {
  onCreate: UserIsClientConnectOrCreateFieldInputOnCreate;
  where: ClientConnectOrCreateWhere;
};

export type UserIsClientConnectOrCreateFieldInputOnCreate = {
  node: ClientOnCreateInput;
};

export type UserIsClientConnection = {
  __typename?: 'UserIsClientConnection';
  edges: Array<UserIsClientRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserIsClientConnectionSort = {
  node?: InputMaybe<ClientSort>;
};

export type UserIsClientConnectionWhere = {
  AND?: InputMaybe<Array<UserIsClientConnectionWhere>>;
  NOT?: InputMaybe<UserIsClientConnectionWhere>;
  OR?: InputMaybe<Array<UserIsClientConnectionWhere>>;
  node?: InputMaybe<ClientWhere>;
};

export type UserIsClientCreateFieldInput = {
  node: ClientCreateInput;
};

export type UserIsClientDeleteFieldInput = {
  delete?: InputMaybe<ClientDeleteInput>;
  where?: InputMaybe<UserIsClientConnectionWhere>;
};

export type UserIsClientDisconnectFieldInput = {
  disconnect?: InputMaybe<ClientDisconnectInput>;
  where?: InputMaybe<UserIsClientConnectionWhere>;
};

export type UserIsClientFieldInput = {
  connect?: InputMaybe<UserIsClientConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserIsClientConnectOrCreateFieldInput>;
  create?: InputMaybe<UserIsClientCreateFieldInput>;
};

export type UserIsClientNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserIsClientNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserIsClientNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserIsClientNodeAggregationWhereInput>>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserIsClientRelationship = {
  __typename?: 'UserIsClientRelationship';
  cursor: Scalars['String']['output'];
  node: Client;
};

export type UserIsClientUpdateConnectionInput = {
  node?: InputMaybe<ClientUpdateInput>;
};

export type UserIsClientUpdateFieldInput = {
  connect?: InputMaybe<UserIsClientConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserIsClientConnectOrCreateFieldInput>;
  create?: InputMaybe<UserIsClientCreateFieldInput>;
  delete?: InputMaybe<UserIsClientDeleteFieldInput>;
  disconnect?: InputMaybe<UserIsClientDisconnectFieldInput>;
  update?: InputMaybe<UserIsClientUpdateConnectionInput>;
  where?: InputMaybe<UserIsClientConnectionWhere>;
};

export type UserIsVendorAggregateInput = {
  AND?: InputMaybe<Array<UserIsVendorAggregateInput>>;
  NOT?: InputMaybe<UserIsVendorAggregateInput>;
  OR?: InputMaybe<Array<UserIsVendorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserIsVendorNodeAggregationWhereInput>;
};

export type UserIsVendorConnectFieldInput = {
  connect?: InputMaybe<VendorConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VendorConnectWhere>;
};

export type UserIsVendorConnectOrCreateFieldInput = {
  onCreate: UserIsVendorConnectOrCreateFieldInputOnCreate;
  where: VendorConnectOrCreateWhere;
};

export type UserIsVendorConnectOrCreateFieldInputOnCreate = {
  node: VendorOnCreateInput;
};

export type UserIsVendorConnection = {
  __typename?: 'UserIsVendorConnection';
  edges: Array<UserIsVendorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserIsVendorConnectionSort = {
  node?: InputMaybe<VendorSort>;
};

export type UserIsVendorConnectionWhere = {
  AND?: InputMaybe<Array<UserIsVendorConnectionWhere>>;
  NOT?: InputMaybe<UserIsVendorConnectionWhere>;
  OR?: InputMaybe<Array<UserIsVendorConnectionWhere>>;
  node?: InputMaybe<VendorWhere>;
};

export type UserIsVendorCreateFieldInput = {
  node: VendorCreateInput;
};

export type UserIsVendorDeleteFieldInput = {
  delete?: InputMaybe<VendorDeleteInput>;
  where?: InputMaybe<UserIsVendorConnectionWhere>;
};

export type UserIsVendorDisconnectFieldInput = {
  disconnect?: InputMaybe<VendorDisconnectInput>;
  where?: InputMaybe<UserIsVendorConnectionWhere>;
};

export type UserIsVendorFieldInput = {
  connect?: InputMaybe<UserIsVendorConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserIsVendorConnectOrCreateFieldInput>;
  create?: InputMaybe<UserIsVendorCreateFieldInput>;
};

export type UserIsVendorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserIsVendorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserIsVendorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserIsVendorNodeAggregationWhereInput>>;
  labImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserIsVendorRelationship = {
  __typename?: 'UserIsVendorRelationship';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type UserIsVendorUpdateConnectionInput = {
  node?: InputMaybe<VendorUpdateInput>;
};

export type UserIsVendorUpdateFieldInput = {
  connect?: InputMaybe<UserIsVendorConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserIsVendorConnectOrCreateFieldInput>;
  create?: InputMaybe<UserIsVendorCreateFieldInput>;
  delete?: InputMaybe<UserIsVendorDeleteFieldInput>;
  disconnect?: InputMaybe<UserIsVendorDisconnectFieldInput>;
  update?: InputMaybe<UserIsVendorUpdateConnectionInput>;
  where?: InputMaybe<UserIsVendorConnectionWhere>;
};

export type UserModuleTicketHasModuleticketAggregationSelection = {
  __typename?: 'UserModuleTicketHasModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserModuleTicketHasModuleticketNodeAggregateSelection>;
};

export type UserModuleTicketHasModuleticketNodeAggregateSelection = {
  __typename?: 'UserModuleTicketHasModuleticketNodeAggregateSelection';
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type UserOnCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pan?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  user_type?: InputMaybe<UserType>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  hasDocuments?: InputMaybe<UserHasDocumentsCreateFieldInput>;
  hasEmployee?: InputMaybe<UserHasEmployeeCreateFieldInput>;
  hasModuleticket?: InputMaybe<UserHasModuleticketCreateFieldInput>;
  hasRole?: InputMaybe<UserHasRoleCreateFieldInput>;
  isAdmin?: InputMaybe<UserIsAdminCreateFieldInput>;
  isClient?: InputMaybe<UserIsClientCreateFieldInput>;
  isVendor?: InputMaybe<UserIsVendorCreateFieldInput>;
};

export type UserRoleHasRoleAggregationSelection = {
  __typename?: 'UserRoleHasRoleAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserRoleHasRoleNodeAggregateSelection>;
};

export type UserRoleHasRoleNodeAggregateSelection = {
  __typename?: 'UserRoleHasRoleNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  address?: InputMaybe<SortDirection>;
  bio?: InputMaybe<SortDirection>;
  city?: InputMaybe<SortDirection>;
  companyEmail?: InputMaybe<SortDirection>;
  companyName?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  gstNumber?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  pan?: InputMaybe<SortDirection>;
  phone?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  user_type?: InputMaybe<SortDirection>;
  zip?: InputMaybe<SortDirection>;
};

export enum UserType {
  Admin = 'ADMIN',
  Consumer = 'CONSUMER',
  CoventenEmployee = 'COVENTEN_EMPLOYEE',
  LabAssistant = 'LAB_ASSISTANT',
  ServiceProvider = 'SERVICE_PROVIDER'
}

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<UserHasDocumentsUpdateFieldInput>;
  hasEmployee?: InputMaybe<UserHasEmployeeUpdateFieldInput>;
  hasModuleticket?: InputMaybe<UserHasModuleticketUpdateFieldInput>;
  hasRole?: InputMaybe<UserHasRoleUpdateFieldInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<UserIsAdminUpdateFieldInput>;
  isClient?: InputMaybe<UserIsClientUpdateFieldInput>;
  isVendor?: InputMaybe<UserIsVendorUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  pan?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  user_type?: InputMaybe<UserType>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserVendorIsVendorAggregationSelection = {
  __typename?: 'UserVendorIsVendorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserVendorIsVendorNodeAggregateSelection>;
};

export type UserVendorIsVendorNodeAggregateSelection = {
  __typename?: 'UserVendorIsVendorNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  address_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  address_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  bio_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bio_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bio_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bio_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  city_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyEmail_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  companyEmail_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyEmail_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyEmail_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  companyName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  gstNumber_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  gstNumber_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  gstNumber_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gstNumber_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<DocumentsWhere>;
  hasDocumentsAggregate?: InputMaybe<UserHasDocumentsAggregateInput>;
  hasDocumentsConnection?: InputMaybe<UserHasDocumentsConnectionWhere>;
  hasDocumentsConnection_NOT?: InputMaybe<UserHasDocumentsConnectionWhere>;
  hasDocuments_NOT?: InputMaybe<DocumentsWhere>;
  hasEmployee?: InputMaybe<EmployeeWhere>;
  hasEmployeeAggregate?: InputMaybe<UserHasEmployeeAggregateInput>;
  hasEmployeeConnection?: InputMaybe<UserHasEmployeeConnectionWhere>;
  hasEmployeeConnection_NOT?: InputMaybe<UserHasEmployeeConnectionWhere>;
  hasEmployee_NOT?: InputMaybe<EmployeeWhere>;
  hasModuleticket?: InputMaybe<ModuleTicketWhere>;
  hasModuleticketAggregate?: InputMaybe<UserHasModuleticketAggregateInput>;
  hasModuleticketConnection?: InputMaybe<UserHasModuleticketConnectionWhere>;
  hasModuleticketConnection_NOT?: InputMaybe<UserHasModuleticketConnectionWhere>;
  hasModuleticket_NOT?: InputMaybe<ModuleTicketWhere>;
  hasRole?: InputMaybe<RoleWhere>;
  hasRoleAggregate?: InputMaybe<UserHasRoleAggregateInput>;
  hasRoleConnection?: InputMaybe<UserHasRoleConnectionWhere>;
  hasRoleConnection_NOT?: InputMaybe<UserHasRoleConnectionWhere>;
  hasRole_NOT?: InputMaybe<RoleWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  image_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<AdminWhere>;
  isAdminAggregate?: InputMaybe<UserIsAdminAggregateInput>;
  isAdminConnection?: InputMaybe<UserIsAdminConnectionWhere>;
  isAdminConnection_NOT?: InputMaybe<UserIsAdminConnectionWhere>;
  isAdmin_NOT?: InputMaybe<AdminWhere>;
  isClient?: InputMaybe<ClientWhere>;
  isClientAggregate?: InputMaybe<UserIsClientAggregateInput>;
  isClientConnection?: InputMaybe<UserIsClientConnectionWhere>;
  isClientConnection_NOT?: InputMaybe<UserIsClientConnectionWhere>;
  isClient_NOT?: InputMaybe<ClientWhere>;
  isVendor?: InputMaybe<VendorWhere>;
  isVendorAggregate?: InputMaybe<UserIsVendorAggregateInput>;
  isVendorConnection?: InputMaybe<UserIsVendorConnectionWhere>;
  isVendorConnection_NOT?: InputMaybe<UserIsVendorConnectionWhere>;
  isVendor_NOT?: InputMaybe<VendorWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  pan?: InputMaybe<Scalars['String']['input']>;
  pan_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  pan_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  pan_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pan_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  phone_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  phone_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  state_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  state_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  status_IN?: InputMaybe<Array<InputMaybe<Status>>>;
  user_type?: InputMaybe<UserType>;
  user_type_IN?: InputMaybe<Array<InputMaybe<UserType>>>;
  zip?: InputMaybe<Scalars['String']['input']>;
  zip_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  zip_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  zip_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zip_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Vendor = {
  __typename?: 'Vendor';
  adminApproved?: Maybe<Admin>;
  adminApprovedAggregate?: Maybe<VendorAdminAdminApprovedAggregationSelection>;
  adminApprovedConnection: VendorAdminApprovedConnection;
  communicationticketFor?: Maybe<CommunicationTicket>;
  communicationticketForAggregate?: Maybe<VendorCommunicationTicketCommunicationticketForAggregationSelection>;
  communicationticketForConnection: VendorCommunicationticketForConnection;
  createdInvoice?: Maybe<Invoice>;
  createdInvoiceAggregate?: Maybe<VendorInvoiceCreatedInvoiceAggregationSelection>;
  createdInvoiceConnection: VendorCreatedInvoiceConnection;
  hasLeads?: Maybe<Leads>;
  hasLeadsAggregate?: Maybe<VendorLeadsHasLeadsAggregationSelection>;
  hasLeadsConnection: VendorHasLeadsConnection;
  hasManagement?: Maybe<Management>;
  hasManagementAggregate?: Maybe<VendorManagementHasManagementAggregationSelection>;
  hasManagementConnection: VendorHasManagementConnection;
  hasModuleticket?: Maybe<ModuleTicket>;
  hasModuleticketAggregate?: Maybe<VendorModuleTicketHasModuleticketAggregationSelection>;
  hasModuleticketConnection: VendorHasModuleticketConnection;
  hasNotification?: Maybe<Notification>;
  hasNotificationAggregate?: Maybe<VendorNotificationHasNotificationAggregationSelection>;
  hasNotificationConnection: VendorHasNotificationConnection;
  hasReply?: Maybe<Reply>;
  hasReplyAggregate?: Maybe<VendorReplyHasReplyAggregationSelection>;
  hasReplyConnection: VendorHasReplyConnection;
  hasSupportticket?: Maybe<SupportTicket>;
  hasSupportticketAggregate?: Maybe<VendorSupportTicketHasSupportticketAggregationSelection>;
  hasSupportticketConnection: VendorHasSupportticketConnection;
  id: Scalars['ID']['output'];
  industry?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  labImage?: Maybe<Scalars['String']['output']>;
  sub_type?: Maybe<Scalars['String']['output']>;
  userIs?: Maybe<User>;
  userIsAggregate?: Maybe<VendorUserUserIsAggregationSelection>;
  userIsConnection: VendorUserIsConnection;
};


export type VendorAdminApprovedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type VendorAdminApprovedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AdminWhere>;
};


export type VendorAdminApprovedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorAdminApprovedConnectionSort>>;
  where?: InputMaybe<VendorAdminApprovedConnectionWhere>;
};


export type VendorCommunicationticketForArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommunicationTicketOptions>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type VendorCommunicationticketForAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommunicationTicketWhere>;
};


export type VendorCommunicationticketForConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorCommunicationticketForConnectionSort>>;
  where?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
};


export type VendorCreatedInvoiceArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<InvoiceOptions>;
  where?: InputMaybe<InvoiceWhere>;
};


export type VendorCreatedInvoiceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InvoiceWhere>;
};


export type VendorCreatedInvoiceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorCreatedInvoiceConnectionSort>>;
  where?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
};


export type VendorHasLeadsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LeadsOptions>;
  where?: InputMaybe<LeadsWhere>;
};


export type VendorHasLeadsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LeadsWhere>;
};


export type VendorHasLeadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorHasLeadsConnectionSort>>;
  where?: InputMaybe<VendorHasLeadsConnectionWhere>;
};


export type VendorHasManagementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ManagementOptions>;
  where?: InputMaybe<ManagementWhere>;
};


export type VendorHasManagementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ManagementWhere>;
};


export type VendorHasManagementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorHasManagementConnectionSort>>;
  where?: InputMaybe<VendorHasManagementConnectionWhere>;
};


export type VendorHasModuleticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ModuleTicketOptions>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type VendorHasModuleticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ModuleTicketWhere>;
};


export type VendorHasModuleticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorHasModuleticketConnectionSort>>;
  where?: InputMaybe<VendorHasModuleticketConnectionWhere>;
};


export type VendorHasNotificationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NotificationOptions>;
  where?: InputMaybe<NotificationWhere>;
};


export type VendorHasNotificationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NotificationWhere>;
};


export type VendorHasNotificationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorHasNotificationConnectionSort>>;
  where?: InputMaybe<VendorHasNotificationConnectionWhere>;
};


export type VendorHasReplyArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ReplyOptions>;
  where?: InputMaybe<ReplyWhere>;
};


export type VendorHasReplyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReplyWhere>;
};


export type VendorHasReplyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorHasReplyConnectionSort>>;
  where?: InputMaybe<VendorHasReplyConnectionWhere>;
};


export type VendorHasSupportticketArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SupportTicketOptions>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type VendorHasSupportticketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SupportTicketWhere>;
};


export type VendorHasSupportticketConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorHasSupportticketConnectionSort>>;
  where?: InputMaybe<VendorHasSupportticketConnectionWhere>;
};


export type VendorUserIsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type VendorUserIsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type VendorUserIsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VendorUserIsConnectionSort>>;
  where?: InputMaybe<VendorUserIsConnectionWhere>;
};

export type VendorAdminAdminApprovedAggregationSelection = {
  __typename?: 'VendorAdminAdminApprovedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorAdminAdminApprovedNodeAggregateSelection>;
};

export type VendorAdminAdminApprovedNodeAggregateSelection = {
  __typename?: 'VendorAdminAdminApprovedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type VendorAdminApprovedAggregateInput = {
  AND?: InputMaybe<Array<VendorAdminApprovedAggregateInput>>;
  NOT?: InputMaybe<VendorAdminApprovedAggregateInput>;
  OR?: InputMaybe<Array<VendorAdminApprovedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorAdminApprovedNodeAggregationWhereInput>;
};

export type VendorAdminApprovedConnectFieldInput = {
  connect?: InputMaybe<AdminConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AdminConnectWhere>;
};

export type VendorAdminApprovedConnectOrCreateFieldInput = {
  onCreate: VendorAdminApprovedConnectOrCreateFieldInputOnCreate;
  where: AdminConnectOrCreateWhere;
};

export type VendorAdminApprovedConnectOrCreateFieldInputOnCreate = {
  node: AdminOnCreateInput;
};

export type VendorAdminApprovedConnection = {
  __typename?: 'VendorAdminApprovedConnection';
  edges: Array<VendorAdminApprovedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorAdminApprovedConnectionSort = {
  node?: InputMaybe<AdminSort>;
};

export type VendorAdminApprovedConnectionWhere = {
  AND?: InputMaybe<Array<VendorAdminApprovedConnectionWhere>>;
  NOT?: InputMaybe<VendorAdminApprovedConnectionWhere>;
  OR?: InputMaybe<Array<VendorAdminApprovedConnectionWhere>>;
  node?: InputMaybe<AdminWhere>;
};

export type VendorAdminApprovedCreateFieldInput = {
  node: AdminCreateInput;
};

export type VendorAdminApprovedDeleteFieldInput = {
  delete?: InputMaybe<AdminDeleteInput>;
  where?: InputMaybe<VendorAdminApprovedConnectionWhere>;
};

export type VendorAdminApprovedDisconnectFieldInput = {
  disconnect?: InputMaybe<AdminDisconnectInput>;
  where?: InputMaybe<VendorAdminApprovedConnectionWhere>;
};

export type VendorAdminApprovedFieldInput = {
  connect?: InputMaybe<VendorAdminApprovedConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorAdminApprovedConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorAdminApprovedCreateFieldInput>;
};

export type VendorAdminApprovedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorAdminApprovedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorAdminApprovedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorAdminApprovedNodeAggregationWhereInput>>;
};

export type VendorAdminApprovedRelationship = {
  __typename?: 'VendorAdminApprovedRelationship';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type VendorAdminApprovedUpdateConnectionInput = {
  node?: InputMaybe<AdminUpdateInput>;
};

export type VendorAdminApprovedUpdateFieldInput = {
  connect?: InputMaybe<VendorAdminApprovedConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorAdminApprovedConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorAdminApprovedCreateFieldInput>;
  delete?: InputMaybe<VendorAdminApprovedDeleteFieldInput>;
  disconnect?: InputMaybe<VendorAdminApprovedDisconnectFieldInput>;
  update?: InputMaybe<VendorAdminApprovedUpdateConnectionInput>;
  where?: InputMaybe<VendorAdminApprovedConnectionWhere>;
};

export type VendorAggregateSelection = {
  __typename?: 'VendorAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  labImage: StringAggregateSelectionNullable;
  sub_type: StringAggregateSelectionNullable;
};

export type VendorCommunicationTicketCommunicationticketForAggregationSelection = {
  __typename?: 'VendorCommunicationTicketCommunicationticketForAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorCommunicationTicketCommunicationticketForNodeAggregateSelection>;
};

export type VendorCommunicationTicketCommunicationticketForNodeAggregateSelection = {
  __typename?: 'VendorCommunicationTicketCommunicationticketForNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  files: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  message: StringAggregateSelectionNullable;
  sub: StringAggregateSelectionNullable;
};

export type VendorCommunicationticketForAggregateInput = {
  AND?: InputMaybe<Array<VendorCommunicationticketForAggregateInput>>;
  NOT?: InputMaybe<VendorCommunicationticketForAggregateInput>;
  OR?: InputMaybe<Array<VendorCommunicationticketForAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorCommunicationticketForNodeAggregationWhereInput>;
};

export type VendorCommunicationticketForConnectFieldInput = {
  connect?: InputMaybe<CommunicationTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommunicationTicketConnectWhere>;
};

export type VendorCommunicationticketForConnectOrCreateFieldInput = {
  onCreate: VendorCommunicationticketForConnectOrCreateFieldInputOnCreate;
  where: CommunicationTicketConnectOrCreateWhere;
};

export type VendorCommunicationticketForConnectOrCreateFieldInputOnCreate = {
  node: CommunicationTicketOnCreateInput;
};

export type VendorCommunicationticketForConnection = {
  __typename?: 'VendorCommunicationticketForConnection';
  edges: Array<VendorCommunicationticketForRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorCommunicationticketForConnectionSort = {
  node?: InputMaybe<CommunicationTicketSort>;
};

export type VendorCommunicationticketForConnectionWhere = {
  AND?: InputMaybe<Array<VendorCommunicationticketForConnectionWhere>>;
  NOT?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
  OR?: InputMaybe<Array<VendorCommunicationticketForConnectionWhere>>;
  node?: InputMaybe<CommunicationTicketWhere>;
};

export type VendorCommunicationticketForCreateFieldInput = {
  node: CommunicationTicketCreateInput;
};

export type VendorCommunicationticketForDeleteFieldInput = {
  delete?: InputMaybe<CommunicationTicketDeleteInput>;
  where?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
};

export type VendorCommunicationticketForDisconnectFieldInput = {
  disconnect?: InputMaybe<CommunicationTicketDisconnectInput>;
  where?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
};

export type VendorCommunicationticketForFieldInput = {
  connect?: InputMaybe<VendorCommunicationticketForConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorCommunicationticketForConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorCommunicationticketForCreateFieldInput>;
};

export type VendorCommunicationticketForNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorCommunicationticketForNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorCommunicationticketForNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorCommunicationticketForNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  files_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  files_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  files_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  files_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sub_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sub_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sub_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorCommunicationticketForRelationship = {
  __typename?: 'VendorCommunicationticketForRelationship';
  cursor: Scalars['String']['output'];
  node: CommunicationTicket;
};

export type VendorCommunicationticketForUpdateConnectionInput = {
  node?: InputMaybe<CommunicationTicketUpdateInput>;
};

export type VendorCommunicationticketForUpdateFieldInput = {
  connect?: InputMaybe<VendorCommunicationticketForConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorCommunicationticketForConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorCommunicationticketForCreateFieldInput>;
  delete?: InputMaybe<VendorCommunicationticketForDeleteFieldInput>;
  disconnect?: InputMaybe<VendorCommunicationticketForDisconnectFieldInput>;
  update?: InputMaybe<VendorCommunicationticketForUpdateConnectionInput>;
  where?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
};

export type VendorConnectInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedConnectFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForConnectFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceConnectFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsConnectFieldInput>;
  hasManagement?: InputMaybe<VendorHasManagementConnectFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketConnectFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationConnectFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyConnectFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketConnectFieldInput>;
  userIs?: InputMaybe<VendorUserIsConnectFieldInput>;
};

export type VendorConnectOrCreateInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedConnectOrCreateFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForConnectOrCreateFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceConnectOrCreateFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsConnectOrCreateFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketConnectOrCreateFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationConnectOrCreateFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyConnectOrCreateFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketConnectOrCreateFieldInput>;
  userIs?: InputMaybe<VendorUserIsConnectOrCreateFieldInput>;
};

export type VendorConnectOrCreateWhere = {
  node: VendorUniqueWhere;
};

export type VendorConnectWhere = {
  node: VendorWhere;
};

export type VendorCreateInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsFieldInput>;
  hasManagement?: InputMaybe<VendorHasManagementFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketFieldInput>;
  industry?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labImage?: InputMaybe<Scalars['String']['input']>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  userIs?: InputMaybe<VendorUserIsFieldInput>;
};

export type VendorCreatedInvoiceAggregateInput = {
  AND?: InputMaybe<Array<VendorCreatedInvoiceAggregateInput>>;
  NOT?: InputMaybe<VendorCreatedInvoiceAggregateInput>;
  OR?: InputMaybe<Array<VendorCreatedInvoiceAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorCreatedInvoiceNodeAggregationWhereInput>;
};

export type VendorCreatedInvoiceConnectFieldInput = {
  connect?: InputMaybe<InvoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<InvoiceConnectWhere>;
};

export type VendorCreatedInvoiceConnectOrCreateFieldInput = {
  onCreate: VendorCreatedInvoiceConnectOrCreateFieldInputOnCreate;
  where: InvoiceConnectOrCreateWhere;
};

export type VendorCreatedInvoiceConnectOrCreateFieldInputOnCreate = {
  node: InvoiceOnCreateInput;
};

export type VendorCreatedInvoiceConnection = {
  __typename?: 'VendorCreatedInvoiceConnection';
  edges: Array<VendorCreatedInvoiceRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorCreatedInvoiceConnectionSort = {
  node?: InputMaybe<InvoiceSort>;
};

export type VendorCreatedInvoiceConnectionWhere = {
  AND?: InputMaybe<Array<VendorCreatedInvoiceConnectionWhere>>;
  NOT?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
  OR?: InputMaybe<Array<VendorCreatedInvoiceConnectionWhere>>;
  node?: InputMaybe<InvoiceWhere>;
};

export type VendorCreatedInvoiceCreateFieldInput = {
  node: InvoiceCreateInput;
};

export type VendorCreatedInvoiceDeleteFieldInput = {
  delete?: InputMaybe<InvoiceDeleteInput>;
  where?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
};

export type VendorCreatedInvoiceDisconnectFieldInput = {
  disconnect?: InputMaybe<InvoiceDisconnectInput>;
  where?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
};

export type VendorCreatedInvoiceFieldInput = {
  connect?: InputMaybe<VendorCreatedInvoiceConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorCreatedInvoiceConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorCreatedInvoiceCreateFieldInput>;
};

export type VendorCreatedInvoiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorCreatedInvoiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorCreatedInvoiceNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorCreatedInvoiceNodeAggregationWhereInput>>;
  clientAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  clientName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  clientName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  clientName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  priceWithTax_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceWithTax_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  priceWithTax_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  taxRate_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxRate_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  taxRate_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  taxType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  taxType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  taxType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  totalPrice_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  totalPrice_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorCreatedInvoiceRelationship = {
  __typename?: 'VendorCreatedInvoiceRelationship';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

export type VendorCreatedInvoiceUpdateConnectionInput = {
  node?: InputMaybe<InvoiceUpdateInput>;
};

export type VendorCreatedInvoiceUpdateFieldInput = {
  connect?: InputMaybe<VendorCreatedInvoiceConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorCreatedInvoiceConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorCreatedInvoiceCreateFieldInput>;
  delete?: InputMaybe<VendorCreatedInvoiceDeleteFieldInput>;
  disconnect?: InputMaybe<VendorCreatedInvoiceDisconnectFieldInput>;
  update?: InputMaybe<VendorCreatedInvoiceUpdateConnectionInput>;
  where?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
};

export type VendorDeleteInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedDeleteFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForDeleteFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceDeleteFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsDeleteFieldInput>;
  hasManagement?: InputMaybe<VendorHasManagementDeleteFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketDeleteFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationDeleteFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyDeleteFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketDeleteFieldInput>;
  userIs?: InputMaybe<VendorUserIsDeleteFieldInput>;
};

export type VendorDisconnectInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedDisconnectFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForDisconnectFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceDisconnectFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsDisconnectFieldInput>;
  hasManagement?: InputMaybe<VendorHasManagementDisconnectFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketDisconnectFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationDisconnectFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyDisconnectFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketDisconnectFieldInput>;
  userIs?: InputMaybe<VendorUserIsDisconnectFieldInput>;
};

export type VendorEdge = {
  __typename?: 'VendorEdge';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type VendorHasLeadsAggregateInput = {
  AND?: InputMaybe<Array<VendorHasLeadsAggregateInput>>;
  NOT?: InputMaybe<VendorHasLeadsAggregateInput>;
  OR?: InputMaybe<Array<VendorHasLeadsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorHasLeadsNodeAggregationWhereInput>;
};

export type VendorHasLeadsConnectFieldInput = {
  connect?: InputMaybe<LeadsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LeadsConnectWhere>;
};

export type VendorHasLeadsConnectOrCreateFieldInput = {
  onCreate: VendorHasLeadsConnectOrCreateFieldInputOnCreate;
  where: LeadsConnectOrCreateWhere;
};

export type VendorHasLeadsConnectOrCreateFieldInputOnCreate = {
  node: LeadsOnCreateInput;
};

export type VendorHasLeadsConnection = {
  __typename?: 'VendorHasLeadsConnection';
  edges: Array<VendorHasLeadsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorHasLeadsConnectionSort = {
  node?: InputMaybe<LeadsSort>;
};

export type VendorHasLeadsConnectionWhere = {
  AND?: InputMaybe<Array<VendorHasLeadsConnectionWhere>>;
  NOT?: InputMaybe<VendorHasLeadsConnectionWhere>;
  OR?: InputMaybe<Array<VendorHasLeadsConnectionWhere>>;
  node?: InputMaybe<LeadsWhere>;
};

export type VendorHasLeadsCreateFieldInput = {
  node: LeadsCreateInput;
};

export type VendorHasLeadsDeleteFieldInput = {
  delete?: InputMaybe<LeadsDeleteInput>;
  where?: InputMaybe<VendorHasLeadsConnectionWhere>;
};

export type VendorHasLeadsDisconnectFieldInput = {
  disconnect?: InputMaybe<LeadsDisconnectInput>;
  where?: InputMaybe<VendorHasLeadsConnectionWhere>;
};

export type VendorHasLeadsFieldInput = {
  connect?: InputMaybe<VendorHasLeadsConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasLeadsConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasLeadsCreateFieldInput>;
};

export type VendorHasLeadsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorHasLeadsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorHasLeadsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorHasLeadsNodeAggregationWhereInput>>;
  condition_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  condition_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  condition_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  condition_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  condition_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  createdAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  createdAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  duration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  duration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  duration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  duration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  duration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  industry_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  industry_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  industry_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  industry_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  industry_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  price_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  price_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  price_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  price_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  vendorAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  vendorAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorHasLeadsRelationship = {
  __typename?: 'VendorHasLeadsRelationship';
  cursor: Scalars['String']['output'];
  node: Leads;
};

export type VendorHasLeadsUpdateConnectionInput = {
  node?: InputMaybe<LeadsUpdateInput>;
};

export type VendorHasLeadsUpdateFieldInput = {
  connect?: InputMaybe<VendorHasLeadsConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasLeadsConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasLeadsCreateFieldInput>;
  delete?: InputMaybe<VendorHasLeadsDeleteFieldInput>;
  disconnect?: InputMaybe<VendorHasLeadsDisconnectFieldInput>;
  update?: InputMaybe<VendorHasLeadsUpdateConnectionInput>;
  where?: InputMaybe<VendorHasLeadsConnectionWhere>;
};

export type VendorHasManagementAggregateInput = {
  AND?: InputMaybe<Array<VendorHasManagementAggregateInput>>;
  NOT?: InputMaybe<VendorHasManagementAggregateInput>;
  OR?: InputMaybe<Array<VendorHasManagementAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorHasManagementNodeAggregationWhereInput>;
};

export type VendorHasManagementConnectFieldInput = {
  connect?: InputMaybe<ManagementConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ManagementConnectWhere>;
};

export type VendorHasManagementConnection = {
  __typename?: 'VendorHasManagementConnection';
  edges: Array<VendorHasManagementRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorHasManagementConnectionSort = {
  node?: InputMaybe<ManagementSort>;
};

export type VendorHasManagementConnectionWhere = {
  AND?: InputMaybe<Array<VendorHasManagementConnectionWhere>>;
  NOT?: InputMaybe<VendorHasManagementConnectionWhere>;
  OR?: InputMaybe<Array<VendorHasManagementConnectionWhere>>;
  node?: InputMaybe<ManagementWhere>;
};

export type VendorHasManagementCreateFieldInput = {
  node: ManagementCreateInput;
};

export type VendorHasManagementDeleteFieldInput = {
  delete?: InputMaybe<ManagementDeleteInput>;
  where?: InputMaybe<VendorHasManagementConnectionWhere>;
};

export type VendorHasManagementDisconnectFieldInput = {
  disconnect?: InputMaybe<ManagementDisconnectInput>;
  where?: InputMaybe<VendorHasManagementConnectionWhere>;
};

export type VendorHasManagementFieldInput = {
  connect?: InputMaybe<VendorHasManagementConnectFieldInput>;
  create?: InputMaybe<VendorHasManagementCreateFieldInput>;
};

export type VendorHasManagementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorHasManagementNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorHasManagementNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorHasManagementNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  moduelid_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  moduelid_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduelid_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  moduleTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  moduleTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorHasManagementRelationship = {
  __typename?: 'VendorHasManagementRelationship';
  cursor: Scalars['String']['output'];
  node: Management;
};

export type VendorHasManagementUpdateConnectionInput = {
  node?: InputMaybe<ManagementUpdateInput>;
};

export type VendorHasManagementUpdateFieldInput = {
  connect?: InputMaybe<VendorHasManagementConnectFieldInput>;
  create?: InputMaybe<VendorHasManagementCreateFieldInput>;
  delete?: InputMaybe<VendorHasManagementDeleteFieldInput>;
  disconnect?: InputMaybe<VendorHasManagementDisconnectFieldInput>;
  update?: InputMaybe<VendorHasManagementUpdateConnectionInput>;
  where?: InputMaybe<VendorHasManagementConnectionWhere>;
};

export type VendorHasModuleticketAggregateInput = {
  AND?: InputMaybe<Array<VendorHasModuleticketAggregateInput>>;
  NOT?: InputMaybe<VendorHasModuleticketAggregateInput>;
  OR?: InputMaybe<Array<VendorHasModuleticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorHasModuleticketNodeAggregationWhereInput>;
};

export type VendorHasModuleticketConnectFieldInput = {
  connect?: InputMaybe<ModuleTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ModuleTicketConnectWhere>;
};

export type VendorHasModuleticketConnectOrCreateFieldInput = {
  onCreate: VendorHasModuleticketConnectOrCreateFieldInputOnCreate;
  where: ModuleTicketConnectOrCreateWhere;
};

export type VendorHasModuleticketConnectOrCreateFieldInputOnCreate = {
  node: ModuleTicketOnCreateInput;
};

export type VendorHasModuleticketConnection = {
  __typename?: 'VendorHasModuleticketConnection';
  edges: Array<VendorHasModuleticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorHasModuleticketConnectionSort = {
  node?: InputMaybe<ModuleTicketSort>;
};

export type VendorHasModuleticketConnectionWhere = {
  AND?: InputMaybe<Array<VendorHasModuleticketConnectionWhere>>;
  NOT?: InputMaybe<VendorHasModuleticketConnectionWhere>;
  OR?: InputMaybe<Array<VendorHasModuleticketConnectionWhere>>;
  node?: InputMaybe<ModuleTicketWhere>;
};

export type VendorHasModuleticketCreateFieldInput = {
  node: ModuleTicketCreateInput;
};

export type VendorHasModuleticketDeleteFieldInput = {
  delete?: InputMaybe<ModuleTicketDeleteInput>;
  where?: InputMaybe<VendorHasModuleticketConnectionWhere>;
};

export type VendorHasModuleticketDisconnectFieldInput = {
  disconnect?: InputMaybe<ModuleTicketDisconnectInput>;
  where?: InputMaybe<VendorHasModuleticketConnectionWhere>;
};

export type VendorHasModuleticketFieldInput = {
  connect?: InputMaybe<VendorHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasModuleticketCreateFieldInput>;
};

export type VendorHasModuleticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorHasModuleticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorHasModuleticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorHasModuleticketNodeAggregationWhereInput>>;
  complain_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  complain_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  complain_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  complain_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorHasModuleticketRelationship = {
  __typename?: 'VendorHasModuleticketRelationship';
  cursor: Scalars['String']['output'];
  node: ModuleTicket;
};

export type VendorHasModuleticketUpdateConnectionInput = {
  node?: InputMaybe<ModuleTicketUpdateInput>;
};

export type VendorHasModuleticketUpdateFieldInput = {
  connect?: InputMaybe<VendorHasModuleticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasModuleticketConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasModuleticketCreateFieldInput>;
  delete?: InputMaybe<VendorHasModuleticketDeleteFieldInput>;
  disconnect?: InputMaybe<VendorHasModuleticketDisconnectFieldInput>;
  update?: InputMaybe<VendorHasModuleticketUpdateConnectionInput>;
  where?: InputMaybe<VendorHasModuleticketConnectionWhere>;
};

export type VendorHasNotificationAggregateInput = {
  AND?: InputMaybe<Array<VendorHasNotificationAggregateInput>>;
  NOT?: InputMaybe<VendorHasNotificationAggregateInput>;
  OR?: InputMaybe<Array<VendorHasNotificationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorHasNotificationNodeAggregationWhereInput>;
};

export type VendorHasNotificationConnectFieldInput = {
  connect?: InputMaybe<NotificationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NotificationConnectWhere>;
};

export type VendorHasNotificationConnectOrCreateFieldInput = {
  onCreate: VendorHasNotificationConnectOrCreateFieldInputOnCreate;
  where: NotificationConnectOrCreateWhere;
};

export type VendorHasNotificationConnectOrCreateFieldInputOnCreate = {
  node: NotificationOnCreateInput;
};

export type VendorHasNotificationConnection = {
  __typename?: 'VendorHasNotificationConnection';
  edges: Array<VendorHasNotificationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorHasNotificationConnectionSort = {
  node?: InputMaybe<NotificationSort>;
};

export type VendorHasNotificationConnectionWhere = {
  AND?: InputMaybe<Array<VendorHasNotificationConnectionWhere>>;
  NOT?: InputMaybe<VendorHasNotificationConnectionWhere>;
  OR?: InputMaybe<Array<VendorHasNotificationConnectionWhere>>;
  node?: InputMaybe<NotificationWhere>;
};

export type VendorHasNotificationCreateFieldInput = {
  node: NotificationCreateInput;
};

export type VendorHasNotificationDeleteFieldInput = {
  delete?: InputMaybe<NotificationDeleteInput>;
  where?: InputMaybe<VendorHasNotificationConnectionWhere>;
};

export type VendorHasNotificationDisconnectFieldInput = {
  disconnect?: InputMaybe<NotificationDisconnectInput>;
  where?: InputMaybe<VendorHasNotificationConnectionWhere>;
};

export type VendorHasNotificationFieldInput = {
  connect?: InputMaybe<VendorHasNotificationConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasNotificationConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasNotificationCreateFieldInput>;
};

export type VendorHasNotificationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorHasNotificationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorHasNotificationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorHasNotificationNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorHasNotificationRelationship = {
  __typename?: 'VendorHasNotificationRelationship';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type VendorHasNotificationUpdateConnectionInput = {
  node?: InputMaybe<NotificationUpdateInput>;
};

export type VendorHasNotificationUpdateFieldInput = {
  connect?: InputMaybe<VendorHasNotificationConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasNotificationConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasNotificationCreateFieldInput>;
  delete?: InputMaybe<VendorHasNotificationDeleteFieldInput>;
  disconnect?: InputMaybe<VendorHasNotificationDisconnectFieldInput>;
  update?: InputMaybe<VendorHasNotificationUpdateConnectionInput>;
  where?: InputMaybe<VendorHasNotificationConnectionWhere>;
};

export type VendorHasReplyAggregateInput = {
  AND?: InputMaybe<Array<VendorHasReplyAggregateInput>>;
  NOT?: InputMaybe<VendorHasReplyAggregateInput>;
  OR?: InputMaybe<Array<VendorHasReplyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorHasReplyNodeAggregationWhereInput>;
};

export type VendorHasReplyConnectFieldInput = {
  connect?: InputMaybe<ReplyConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ReplyConnectWhere>;
};

export type VendorHasReplyConnectOrCreateFieldInput = {
  onCreate: VendorHasReplyConnectOrCreateFieldInputOnCreate;
  where: ReplyConnectOrCreateWhere;
};

export type VendorHasReplyConnectOrCreateFieldInputOnCreate = {
  node: ReplyOnCreateInput;
};

export type VendorHasReplyConnection = {
  __typename?: 'VendorHasReplyConnection';
  edges: Array<VendorHasReplyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorHasReplyConnectionSort = {
  node?: InputMaybe<ReplySort>;
};

export type VendorHasReplyConnectionWhere = {
  AND?: InputMaybe<Array<VendorHasReplyConnectionWhere>>;
  NOT?: InputMaybe<VendorHasReplyConnectionWhere>;
  OR?: InputMaybe<Array<VendorHasReplyConnectionWhere>>;
  node?: InputMaybe<ReplyWhere>;
};

export type VendorHasReplyCreateFieldInput = {
  node: ReplyCreateInput;
};

export type VendorHasReplyDeleteFieldInput = {
  delete?: InputMaybe<ReplyDeleteInput>;
  where?: InputMaybe<VendorHasReplyConnectionWhere>;
};

export type VendorHasReplyDisconnectFieldInput = {
  disconnect?: InputMaybe<ReplyDisconnectInput>;
  where?: InputMaybe<VendorHasReplyConnectionWhere>;
};

export type VendorHasReplyFieldInput = {
  connect?: InputMaybe<VendorHasReplyConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasReplyConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasReplyCreateFieldInput>;
};

export type VendorHasReplyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorHasReplyNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorHasReplyNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorHasReplyNodeAggregationWhereInput>>;
  replyMessage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  replyMessage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  replyMessage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  senderEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  senderEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorHasReplyRelationship = {
  __typename?: 'VendorHasReplyRelationship';
  cursor: Scalars['String']['output'];
  node: Reply;
};

export type VendorHasReplyUpdateConnectionInput = {
  node?: InputMaybe<ReplyUpdateInput>;
};

export type VendorHasReplyUpdateFieldInput = {
  connect?: InputMaybe<VendorHasReplyConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasReplyConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasReplyCreateFieldInput>;
  delete?: InputMaybe<VendorHasReplyDeleteFieldInput>;
  disconnect?: InputMaybe<VendorHasReplyDisconnectFieldInput>;
  update?: InputMaybe<VendorHasReplyUpdateConnectionInput>;
  where?: InputMaybe<VendorHasReplyConnectionWhere>;
};

export type VendorHasSupportticketAggregateInput = {
  AND?: InputMaybe<Array<VendorHasSupportticketAggregateInput>>;
  NOT?: InputMaybe<VendorHasSupportticketAggregateInput>;
  OR?: InputMaybe<Array<VendorHasSupportticketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorHasSupportticketNodeAggregationWhereInput>;
};

export type VendorHasSupportticketConnectFieldInput = {
  connect?: InputMaybe<SupportTicketConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SupportTicketConnectWhere>;
};

export type VendorHasSupportticketConnectOrCreateFieldInput = {
  onCreate: VendorHasSupportticketConnectOrCreateFieldInputOnCreate;
  where: SupportTicketConnectOrCreateWhere;
};

export type VendorHasSupportticketConnectOrCreateFieldInputOnCreate = {
  node: SupportTicketOnCreateInput;
};

export type VendorHasSupportticketConnection = {
  __typename?: 'VendorHasSupportticketConnection';
  edges: Array<VendorHasSupportticketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorHasSupportticketConnectionSort = {
  node?: InputMaybe<SupportTicketSort>;
};

export type VendorHasSupportticketConnectionWhere = {
  AND?: InputMaybe<Array<VendorHasSupportticketConnectionWhere>>;
  NOT?: InputMaybe<VendorHasSupportticketConnectionWhere>;
  OR?: InputMaybe<Array<VendorHasSupportticketConnectionWhere>>;
  node?: InputMaybe<SupportTicketWhere>;
};

export type VendorHasSupportticketCreateFieldInput = {
  node: SupportTicketCreateInput;
};

export type VendorHasSupportticketDeleteFieldInput = {
  delete?: InputMaybe<SupportTicketDeleteInput>;
  where?: InputMaybe<VendorHasSupportticketConnectionWhere>;
};

export type VendorHasSupportticketDisconnectFieldInput = {
  disconnect?: InputMaybe<SupportTicketDisconnectInput>;
  where?: InputMaybe<VendorHasSupportticketConnectionWhere>;
};

export type VendorHasSupportticketFieldInput = {
  connect?: InputMaybe<VendorHasSupportticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasSupportticketConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasSupportticketCreateFieldInput>;
};

export type VendorHasSupportticketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorHasSupportticketNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorHasSupportticketNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorHasSupportticketNodeAggregationWhereInput>>;
  ticket_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ticket_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ticket_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ticket_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorHasSupportticketRelationship = {
  __typename?: 'VendorHasSupportticketRelationship';
  cursor: Scalars['String']['output'];
  node: SupportTicket;
};

export type VendorHasSupportticketUpdateConnectionInput = {
  node?: InputMaybe<SupportTicketUpdateInput>;
};

export type VendorHasSupportticketUpdateFieldInput = {
  connect?: InputMaybe<VendorHasSupportticketConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorHasSupportticketConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorHasSupportticketCreateFieldInput>;
  delete?: InputMaybe<VendorHasSupportticketDeleteFieldInput>;
  disconnect?: InputMaybe<VendorHasSupportticketDisconnectFieldInput>;
  update?: InputMaybe<VendorHasSupportticketUpdateConnectionInput>;
  where?: InputMaybe<VendorHasSupportticketConnectionWhere>;
};

export type VendorInvoiceCreatedInvoiceAggregationSelection = {
  __typename?: 'VendorInvoiceCreatedInvoiceAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorInvoiceCreatedInvoiceNodeAggregateSelection>;
};

export type VendorInvoiceCreatedInvoiceNodeAggregateSelection = {
  __typename?: 'VendorInvoiceCreatedInvoiceNodeAggregateSelection';
  clientAddress: StringAggregateSelectionNullable;
  clientEmail: StringAggregateSelectionNullable;
  clientName: StringAggregateSelectionNullable;
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  priceWithTax: IntAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type VendorLeadsHasLeadsAggregationSelection = {
  __typename?: 'VendorLeadsHasLeadsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorLeadsHasLeadsNodeAggregateSelection>;
};

export type VendorLeadsHasLeadsNodeAggregateSelection = {
  __typename?: 'VendorLeadsHasLeadsNodeAggregateSelection';
  condition: StringAggregateSelectionNullable;
  createdAt: StringAggregateSelectionNullable;
  duration: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  industry: StringAggregateSelectionNullable;
  message: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  vendorAddress: StringAggregateSelectionNullable;
};

export type VendorManagementHasManagementAggregationSelection = {
  __typename?: 'VendorManagementHasManagementAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorManagementHasManagementNodeAggregateSelection>;
};

export type VendorManagementHasManagementNodeAggregateSelection = {
  __typename?: 'VendorManagementHasManagementNodeAggregateSelection';
  id: StringAggregateSelectionNonNullable;
  moduelid: StringAggregateSelectionNonNullable;
  moduleTitle: StringAggregateSelectionNonNullable;
};

export type VendorModuleTicketHasModuleticketAggregationSelection = {
  __typename?: 'VendorModuleTicketHasModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorModuleTicketHasModuleticketNodeAggregateSelection>;
};

export type VendorModuleTicketHasModuleticketNodeAggregateSelection = {
  __typename?: 'VendorModuleTicketHasModuleticketNodeAggregateSelection';
  complain: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type VendorNotificationHasNotificationAggregationSelection = {
  __typename?: 'VendorNotificationHasNotificationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorNotificationHasNotificationNodeAggregateSelection>;
};

export type VendorNotificationHasNotificationNodeAggregateSelection = {
  __typename?: 'VendorNotificationHasNotificationNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
};

export type VendorOnCreateInput = {
  industry?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labImage?: InputMaybe<Scalars['String']['input']>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
};

export type VendorOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more VendorSort objects to sort Vendors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VendorSort>>;
};

export type VendorRelationInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedCreateFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForCreateFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceCreateFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsCreateFieldInput>;
  hasManagement?: InputMaybe<VendorHasManagementCreateFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketCreateFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationCreateFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyCreateFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketCreateFieldInput>;
  userIs?: InputMaybe<VendorUserIsCreateFieldInput>;
};

export type VendorReplyHasReplyAggregationSelection = {
  __typename?: 'VendorReplyHasReplyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorReplyHasReplyNodeAggregateSelection>;
};

export type VendorReplyHasReplyNodeAggregateSelection = {
  __typename?: 'VendorReplyHasReplyNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  replyMessage: StringAggregateSelectionNullable;
  senderEmail: StringAggregateSelectionNullable;
};

/** Fields to sort Vendors by. The order in which sorts are applied is not guaranteed when specifying many fields in one VendorSort object. */
export type VendorSort = {
  id?: InputMaybe<SortDirection>;
  labImage?: InputMaybe<SortDirection>;
  sub_type?: InputMaybe<SortDirection>;
};

export type VendorSupportTicketHasSupportticketAggregationSelection = {
  __typename?: 'VendorSupportTicketHasSupportticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorSupportTicketHasSupportticketNodeAggregateSelection>;
};

export type VendorSupportTicketHasSupportticketNodeAggregateSelection = {
  __typename?: 'VendorSupportTicketHasSupportticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  ticket: StringAggregateSelectionNonNullable;
};

export type VendorUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorUpdateInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedUpdateFieldInput>;
  communicationticketFor?: InputMaybe<VendorCommunicationticketForUpdateFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceUpdateFieldInput>;
  hasLeads?: InputMaybe<VendorHasLeadsUpdateFieldInput>;
  hasManagement?: InputMaybe<VendorHasManagementUpdateFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketUpdateFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationUpdateFieldInput>;
  hasReply?: InputMaybe<VendorHasReplyUpdateFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketUpdateFieldInput>;
  industry?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  industry_POP?: InputMaybe<Scalars['Int']['input']>;
  industry_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labImage?: InputMaybe<Scalars['String']['input']>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  userIs?: InputMaybe<VendorUserIsUpdateFieldInput>;
};

export type VendorUserIsAggregateInput = {
  AND?: InputMaybe<Array<VendorUserIsAggregateInput>>;
  NOT?: InputMaybe<VendorUserIsAggregateInput>;
  OR?: InputMaybe<Array<VendorUserIsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VendorUserIsNodeAggregationWhereInput>;
};

export type VendorUserIsConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type VendorUserIsConnectOrCreateFieldInput = {
  onCreate: VendorUserIsConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type VendorUserIsConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type VendorUserIsConnection = {
  __typename?: 'VendorUserIsConnection';
  edges: Array<VendorUserIsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorUserIsConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type VendorUserIsConnectionWhere = {
  AND?: InputMaybe<Array<VendorUserIsConnectionWhere>>;
  NOT?: InputMaybe<VendorUserIsConnectionWhere>;
  OR?: InputMaybe<Array<VendorUserIsConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type VendorUserIsCreateFieldInput = {
  node: UserCreateInput;
};

export type VendorUserIsDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<VendorUserIsConnectionWhere>;
};

export type VendorUserIsDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<VendorUserIsConnectionWhere>;
};

export type VendorUserIsFieldInput = {
  connect?: InputMaybe<VendorUserIsConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorUserIsConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorUserIsCreateFieldInput>;
};

export type VendorUserIsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VendorUserIsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VendorUserIsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VendorUserIsNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  gstNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  gstNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  pan_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  pan_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  pan_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  phone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  phone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  phone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zip_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zip_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zip_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorUserIsRelationship = {
  __typename?: 'VendorUserIsRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type VendorUserIsUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type VendorUserIsUpdateFieldInput = {
  connect?: InputMaybe<VendorUserIsConnectFieldInput>;
  connectOrCreate?: InputMaybe<VendorUserIsConnectOrCreateFieldInput>;
  create?: InputMaybe<VendorUserIsCreateFieldInput>;
  delete?: InputMaybe<VendorUserIsDeleteFieldInput>;
  disconnect?: InputMaybe<VendorUserIsDisconnectFieldInput>;
  update?: InputMaybe<VendorUserIsUpdateConnectionInput>;
  where?: InputMaybe<VendorUserIsConnectionWhere>;
};

export type VendorUserUserIsAggregationSelection = {
  __typename?: 'VendorUserUserIsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorUserUserIsNodeAggregateSelection>;
};

export type VendorUserUserIsNodeAggregateSelection = {
  __typename?: 'VendorUserUserIsNodeAggregateSelection';
  address: StringAggregateSelectionNullable;
  bio: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  companyEmail: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  gstNumber: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  pan: StringAggregateSelectionNullable;
  phone: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  zip: StringAggregateSelectionNullable;
};

export type VendorWhere = {
  AND?: InputMaybe<Array<VendorWhere>>;
  NOT?: InputMaybe<VendorWhere>;
  OR?: InputMaybe<Array<VendorWhere>>;
  adminApproved?: InputMaybe<AdminWhere>;
  adminApprovedAggregate?: InputMaybe<VendorAdminApprovedAggregateInput>;
  adminApprovedConnection?: InputMaybe<VendorAdminApprovedConnectionWhere>;
  adminApprovedConnection_NOT?: InputMaybe<VendorAdminApprovedConnectionWhere>;
  adminApproved_NOT?: InputMaybe<AdminWhere>;
  communicationticketFor?: InputMaybe<CommunicationTicketWhere>;
  communicationticketForAggregate?: InputMaybe<VendorCommunicationticketForAggregateInput>;
  communicationticketForConnection?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
  communicationticketForConnection_NOT?: InputMaybe<VendorCommunicationticketForConnectionWhere>;
  communicationticketFor_NOT?: InputMaybe<CommunicationTicketWhere>;
  createdInvoice?: InputMaybe<InvoiceWhere>;
  createdInvoiceAggregate?: InputMaybe<VendorCreatedInvoiceAggregateInput>;
  createdInvoiceConnection?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
  createdInvoiceConnection_NOT?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
  createdInvoice_NOT?: InputMaybe<InvoiceWhere>;
  hasLeads?: InputMaybe<LeadsWhere>;
  hasLeadsAggregate?: InputMaybe<VendorHasLeadsAggregateInput>;
  hasLeadsConnection?: InputMaybe<VendorHasLeadsConnectionWhere>;
  hasLeadsConnection_NOT?: InputMaybe<VendorHasLeadsConnectionWhere>;
  hasLeads_NOT?: InputMaybe<LeadsWhere>;
  hasManagement?: InputMaybe<ManagementWhere>;
  hasManagementAggregate?: InputMaybe<VendorHasManagementAggregateInput>;
  hasManagementConnection?: InputMaybe<VendorHasManagementConnectionWhere>;
  hasManagementConnection_NOT?: InputMaybe<VendorHasManagementConnectionWhere>;
  hasManagement_NOT?: InputMaybe<ManagementWhere>;
  hasModuleticket?: InputMaybe<ModuleTicketWhere>;
  hasModuleticketAggregate?: InputMaybe<VendorHasModuleticketAggregateInput>;
  hasModuleticketConnection?: InputMaybe<VendorHasModuleticketConnectionWhere>;
  hasModuleticketConnection_NOT?: InputMaybe<VendorHasModuleticketConnectionWhere>;
  hasModuleticket_NOT?: InputMaybe<ModuleTicketWhere>;
  hasNotification?: InputMaybe<NotificationWhere>;
  hasNotificationAggregate?: InputMaybe<VendorHasNotificationAggregateInput>;
  hasNotificationConnection?: InputMaybe<VendorHasNotificationConnectionWhere>;
  hasNotificationConnection_NOT?: InputMaybe<VendorHasNotificationConnectionWhere>;
  hasNotification_NOT?: InputMaybe<NotificationWhere>;
  hasReply?: InputMaybe<ReplyWhere>;
  hasReplyAggregate?: InputMaybe<VendorHasReplyAggregateInput>;
  hasReplyConnection?: InputMaybe<VendorHasReplyConnectionWhere>;
  hasReplyConnection_NOT?: InputMaybe<VendorHasReplyConnectionWhere>;
  hasReply_NOT?: InputMaybe<ReplyWhere>;
  hasSupportticket?: InputMaybe<SupportTicketWhere>;
  hasSupportticketAggregate?: InputMaybe<VendorHasSupportticketAggregateInput>;
  hasSupportticketConnection?: InputMaybe<VendorHasSupportticketConnectionWhere>;
  hasSupportticketConnection_NOT?: InputMaybe<VendorHasSupportticketConnectionWhere>;
  hasSupportticket_NOT?: InputMaybe<SupportTicketWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  industry?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  industry_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  labImage?: InputMaybe<Scalars['String']['input']>;
  labImage_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  labImage_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  labImage_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labImage_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  sub_type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sub_type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sub_type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sub_type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  userIs?: InputMaybe<UserWhere>;
  userIsAggregate?: InputMaybe<VendorUserIsAggregateInput>;
  userIsConnection?: InputMaybe<VendorUserIsConnectionWhere>;
  userIsConnection_NOT?: InputMaybe<VendorUserIsConnectionWhere>;
  userIs_NOT?: InputMaybe<UserWhere>;
};

export type VendorsConnection = {
  __typename?: 'VendorsConnection';
  edges: Array<VendorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
