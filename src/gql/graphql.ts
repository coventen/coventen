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
  createdSupportticket?: Maybe<SupportTicket>;
  createdSupportticketAggregate?: Maybe<AdminSupportTicketCreatedSupportticketAggregationSelection>;
  createdSupportticketConnection: AdminCreatedSupportticketConnection;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  labName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  registration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type AdminConnectInput = {
  approvedClient?: InputMaybe<AdminApprovedClientConnectFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorConnectFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceConnectFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationConnectFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageConnectFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketConnectFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketConnectFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectConnectFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasConnectFieldInput>;
  userIs?: InputMaybe<AdminUserIsConnectFieldInput>;
};

export type AdminConnectOrCreateInput = {
  approvedClient?: InputMaybe<AdminApprovedClientConnectOrCreateFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorConnectOrCreateFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationConnectOrCreateFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageConnectOrCreateFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketConnectOrCreateFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectConnectOrCreateFieldInput>;
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
  createdInvoice?: InputMaybe<AdminCreatedInvoiceFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasFieldInput>;
  userIs?: InputMaybe<AdminUserIsFieldInput>;
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
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  createdInvoice?: InputMaybe<AdminCreatedInvoiceDeleteFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationDeleteFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageDeleteFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketDeleteFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketDeleteFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectDeleteFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasDeleteFieldInput>;
  userIs?: InputMaybe<AdminUserIsDeleteFieldInput>;
};

export type AdminDisconnectInput = {
  approvedClient?: InputMaybe<AdminApprovedClientDisconnectFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorDisconnectFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceDisconnectFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationDisconnectFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageDisconnectFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketDisconnectFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketDisconnectFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectDisconnectFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasDisconnectFieldInput>;
  userIs?: InputMaybe<AdminUserIsDisconnectFieldInput>;
};

export type AdminEdge = {
  __typename?: 'AdminEdge';
  cursor: Scalars['String']['output'];
  node: Admin;
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
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
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
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type AdminNotificationCreatedNotificationAggregationSelection = {
  __typename?: 'AdminNotificationCreatedNotificationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AdminNotificationCreatedNotificationNodeAggregateSelection>;
};

export type AdminNotificationCreatedNotificationNodeAggregateSelection = {
  __typename?: 'AdminNotificationCreatedNotificationNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
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
  createdInvoice?: InputMaybe<AdminCreatedInvoiceCreateFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationCreateFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageCreateFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketCreateFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketCreateFieldInput>;
  hasProject?: InputMaybe<AdminHasProjectCreateFieldInput>;
  invoiceHas?: InputMaybe<AdminInvoiceHasCreateFieldInput>;
  userIs?: InputMaybe<AdminUserIsCreateFieldInput>;
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
};

export type AdminUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminUpdateInput = {
  approvedClient?: InputMaybe<AdminApprovedClientUpdateFieldInput>;
  approvedVendor?: InputMaybe<AdminApprovedVendorUpdateFieldInput>;
  createdInvoice?: InputMaybe<AdminCreatedInvoiceUpdateFieldInput>;
  createdNotification?: InputMaybe<AdminCreatedNotificationUpdateFieldInput>;
  createdPage?: InputMaybe<AdminCreatedPageUpdateFieldInput>;
  createdProjectticket?: InputMaybe<AdminCreatedProjectticketUpdateFieldInput>;
  createdSupportticket?: InputMaybe<AdminCreatedSupportticketUpdateFieldInput>;
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
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
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
  createdSupportticket?: InputMaybe<SupportTicketWhere>;
  createdSupportticketAggregate?: InputMaybe<AdminCreatedSupportticketAggregateInput>;
  createdSupportticketConnection?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
  createdSupportticketConnection_NOT?: InputMaybe<AdminCreatedSupportticketConnectionWhere>;
  createdSupportticket_NOT?: InputMaybe<SupportTicketWhere>;
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
  companyEmail?: Maybe<Scalars['String']['output']>;
  companyImage?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  gst?: Maybe<Scalars['String']['output']>;
  hasModuleticket?: Maybe<ModuleTicket>;
  hasModuleticketAggregate?: Maybe<ClientModuleTicketHasModuleticketAggregationSelection>;
  hasModuleticketConnection: ClientHasModuleticketConnection;
  hasNotification?: Maybe<Notification>;
  hasNotificationAggregate?: Maybe<ClientNotificationHasNotificationAggregationSelection>;
  hasNotificationConnection: ClientHasNotificationConnection;
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
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type ClientConnectInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedConnectFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketConnectFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationConnectFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketConnectFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasConnectFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectConnectFieldInput>;
  userIs?: InputMaybe<ClientUserIsConnectFieldInput>;
};

export type ClientConnectOrCreateInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedConnectOrCreateFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketConnectOrCreateFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationConnectOrCreateFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketConnectOrCreateFieldInput>;
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
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyImage?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectFieldInput>;
  userIs?: InputMaybe<ClientUserIsFieldInput>;
};

export type ClientDeleteInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedDeleteFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketDeleteFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationDeleteFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketDeleteFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasDeleteFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectDeleteFieldInput>;
  userIs?: InputMaybe<ClientUserIsDeleteFieldInput>;
};

export type ClientDisconnectInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedDisconnectFieldInput>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketDisconnectFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationDisconnectFieldInput>;
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
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type ClientModuleTicketHasModuleticketAggregationSelection = {
  __typename?: 'ClientModuleTicketHasModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientModuleTicketHasModuleticketNodeAggregateSelection>;
};

export type ClientModuleTicketHasModuleticketNodeAggregateSelection = {
  __typename?: 'ClientModuleTicketHasModuleticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ClientNotificationHasNotificationAggregationSelection = {
  __typename?: 'ClientNotificationHasNotificationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientNotificationHasNotificationNodeAggregateSelection>;
};

export type ClientNotificationHasNotificationNodeAggregateSelection = {
  __typename?: 'ClientNotificationHasNotificationNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type ClientOnCreateInput = {
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyImage?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
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
  hasModuleticket?: InputMaybe<ClientHasModuleticketCreateFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationCreateFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketCreateFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasCreateFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectCreateFieldInput>;
  userIs?: InputMaybe<ClientUserIsCreateFieldInput>;
};

/** Fields to sort Clients by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientSort object. */
export type ClientSort = {
  companyEmail?: InputMaybe<SortDirection>;
  companyImage?: InputMaybe<SortDirection>;
  companyName?: InputMaybe<SortDirection>;
  gst?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type ClientSupportTicketHasSupportticketAggregationSelection = {
  __typename?: 'ClientSupportTicketHasSupportticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ClientSupportTicketHasSupportticketNodeAggregateSelection>;
};

export type ClientSupportTicketHasSupportticketNodeAggregateSelection = {
  __typename?: 'ClientSupportTicketHasSupportticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ClientUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ClientUpdateInput = {
  adminApproved?: InputMaybe<ClientAdminApprovedUpdateFieldInput>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyImage?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  hasModuleticket?: InputMaybe<ClientHasModuleticketUpdateFieldInput>;
  hasNotification?: InputMaybe<ClientHasNotificationUpdateFieldInput>;
  hasSupportticket?: InputMaybe<ClientHasSupportticketUpdateFieldInput>;
  invoiceHas?: InputMaybe<ClientInvoiceHasUpdateFieldInput>;
  orderedProject?: InputMaybe<ClientOrderedProjectUpdateFieldInput>;
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
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
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
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  companyEmail_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  companyEmail_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyEmail_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyEmail_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyImage?: InputMaybe<Scalars['String']['input']>;
  companyImage_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  companyImage_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyImage_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyImage_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  companyName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  gst?: InputMaybe<Scalars['String']['input']>;
  gst_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  gst_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  gst_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gst_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  id: Scalars['ID']['output'];
  moduleHas?: Maybe<Module>;
  moduleHasAggregate?: Maybe<DocumentsModuleModuleHasAggregationSelection>;
  moduleHasConnection: DocumentsModuleHasConnection;
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

export type DocumentsAggregateSelection = {
  __typename?: 'DocumentsAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type DocumentsConnectInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesConnectFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesConnectFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasConnectFieldInput>;
};

export type DocumentsConnectOrCreateInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesConnectOrCreateFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesConnectOrCreateFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasConnectOrCreateFieldInput>;
};

export type DocumentsConnectOrCreateWhere = {
  node: DocumentsUniqueWhere;
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
  moduleHas?: InputMaybe<DocumentsModuleHasFieldInput>;
};

export type DocumentsDeleteInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesDeleteFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesDeleteFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasDeleteFieldInput>;
};

export type DocumentsDisconnectInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesDisconnectFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesDisconnectFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasDisconnectFieldInput>;
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
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type DocumentsOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
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
};

/** Fields to sort Documents by. The order in which sorts are applied is not guaranteed when specifying many fields in one DocumentsSort object. */
export type DocumentsSort = {
  id?: InputMaybe<SortDirection>;
};

export type DocumentsUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DocumentsUpdateInput = {
  hasFiles?: InputMaybe<DocumentsHasFilesUpdateFieldInput>;
  hasImages?: InputMaybe<DocumentsHasImagesUpdateFieldInput>;
  moduleHas?: InputMaybe<DocumentsModuleHasUpdateFieldInput>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  moduleHas?: InputMaybe<ModuleWhere>;
  moduleHasAggregate?: InputMaybe<DocumentsModuleHasAggregateInput>;
  moduleHasConnection?: InputMaybe<DocumentsModuleHasConnectionWhere>;
  moduleHasConnection_NOT?: InputMaybe<DocumentsModuleHasConnectionWhere>;
  moduleHas_NOT?: InputMaybe<ModuleWhere>;
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

export type FilesConnectOrCreateInput = {
  documentsHas?: InputMaybe<FilesDocumentsHasConnectOrCreateFieldInput>;
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
  id: IdAggregateSelectionNonNullable;
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

export type FilesDocumentsHasConnectOrCreateFieldInput = {
  onCreate: FilesDocumentsHasConnectOrCreateFieldInputOnCreate;
  where: DocumentsConnectOrCreateWhere;
};

export type FilesDocumentsHasConnectOrCreateFieldInputOnCreate = {
  node: DocumentsOnCreateInput;
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
  connectOrCreate?: InputMaybe<FilesDocumentsHasConnectOrCreateFieldInput>;
  create?: InputMaybe<FilesDocumentsHasCreateFieldInput>;
};

export type FilesDocumentsHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FilesDocumentsHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FilesDocumentsHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FilesDocumentsHasNodeAggregationWhereInput>>;
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
  connectOrCreate?: InputMaybe<FilesDocumentsHasConnectOrCreateFieldInput>;
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

export type ImagesConnectOrCreateInput = {
  documentsHas?: InputMaybe<ImagesDocumentsHasConnectOrCreateFieldInput>;
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
  id: IdAggregateSelectionNonNullable;
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

export type ImagesDocumentsHasConnectOrCreateFieldInput = {
  onCreate: ImagesDocumentsHasConnectOrCreateFieldInputOnCreate;
  where: DocumentsConnectOrCreateWhere;
};

export type ImagesDocumentsHasConnectOrCreateFieldInputOnCreate = {
  node: DocumentsOnCreateInput;
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
  connectOrCreate?: InputMaybe<ImagesDocumentsHasConnectOrCreateFieldInput>;
  create?: InputMaybe<ImagesDocumentsHasCreateFieldInput>;
};

export type ImagesDocumentsHasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImagesDocumentsHasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImagesDocumentsHasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ImagesDocumentsHasNodeAggregationWhereInput>>;
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
  connectOrCreate?: InputMaybe<ImagesDocumentsHasConnectOrCreateFieldInput>;
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
  hasAdmin?: Maybe<Admin>;
  hasAdminAggregate?: Maybe<InvoiceAdminHasAdminAggregationSelection>;
  hasAdminConnection: InvoiceHasAdminConnection;
  hasClient?: Maybe<Client>;
  hasClientAggregate?: Maybe<InvoiceClientHasClientAggregationSelection>;
  hasClientConnection: InvoiceHasClientConnection;
  hasService: Array<Service>;
  hasServiceAggregate?: Maybe<InvoiceServiceHasServiceAggregationSelection>;
  hasServiceConnection: InvoiceHasServiceConnection;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
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
  count: Scalars['Int']['output'];
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
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
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
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

export type InvoiceConnectWhere = {
  node: InvoiceWhere;
};

export type InvoiceCreateInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedFieldInput>;
  clientAddress?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  hasAdmin?: InputMaybe<InvoiceHasAdminFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientFieldInput>;
  hasService?: InputMaybe<InvoiceHasServiceFieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  id?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  taxRate?: InputMaybe<SortDirection>;
  taxType?: InputMaybe<SortDirection>;
  totalPrice?: InputMaybe<SortDirection>;
};

export type InvoiceUpdateInput = {
  adminCreated?: InputMaybe<InvoiceAdminCreatedUpdateFieldInput>;
  clientAddress?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  hasAdmin?: InputMaybe<InvoiceHasAdminUpdateFieldInput>;
  hasClient?: InputMaybe<InvoiceHasClientUpdateFieldInput>;
  hasService?: InputMaybe<Array<InvoiceHasServiceUpdateFieldInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  price_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
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
  labName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  registration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_GT?: InputMaybe<Scalars['Int']['input']>;
  price_GTE?: InputMaybe<Scalars['Int']['input']>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  price_LT?: InputMaybe<Scalars['Int']['input']>;
  price_LTE?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  status_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  status_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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

export type Module = {
  __typename?: 'Module';
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
  hasDocuments?: InputMaybe<ModuleHasDocumentsConnectOrCreateFieldInput>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<ModuleHasDocumentsFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasFieldInput>;
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
  id: IdAggregateSelectionNonNullable;
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

export type ModuleHasDocumentsConnectOrCreateFieldInput = {
  onCreate: ModuleHasDocumentsConnectOrCreateFieldInputOnCreate;
  where: DocumentsConnectOrCreateWhere;
};

export type ModuleHasDocumentsConnectOrCreateFieldInputOnCreate = {
  node: DocumentsOnCreateInput;
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
  connectOrCreate?: InputMaybe<ModuleHasDocumentsConnectOrCreateFieldInput>;
  create?: InputMaybe<ModuleHasDocumentsCreateFieldInput>;
};

export type ModuleHasDocumentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ModuleHasDocumentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ModuleHasDocumentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ModuleHasDocumentsNodeAggregationWhereInput>>;
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
  connectOrCreate?: InputMaybe<ModuleHasDocumentsConnectOrCreateFieldInput>;
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
  id: IdAggregateSelectionNonNullable;
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
  description?: InputMaybe<Scalars['String']['input']>;
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
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type ModuleTicket = {
  __typename?: 'ModuleTicket';
  clientHas?: Maybe<Client>;
  clientHasAggregate?: Maybe<ModuleTicketClientClientHasAggregationSelection>;
  clientHasConnection: ModuleTicketClientHasConnection;
  forModule?: Maybe<Module>;
  forModuleAggregate?: Maybe<ModuleTicketModuleForModuleAggregationSelection>;
  forModuleConnection: ModuleTicketForModuleConnection;
  id: Scalars['ID']['output'];
  projectticketHas?: Maybe<ProjectTicket>;
  projectticketHasAggregate?: Maybe<ModuleTicketProjectTicketProjectticketHasAggregationSelection>;
  projectticketHasConnection: ModuleTicketProjectticketHasConnection;
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
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type ModuleTicketClientClientHasAggregationSelection = {
  __typename?: 'ModuleTicketClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketClientClientHasNodeAggregateSelection>;
};

export type ModuleTicketClientClientHasNodeAggregateSelection = {
  __typename?: 'ModuleTicketClientClientHasNodeAggregateSelection';
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasConnectFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasConnectFieldInput>;
};

export type ModuleTicketConnectOrCreateInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasConnectOrCreateFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleConnectOrCreateFieldInput>;
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
  forModule?: InputMaybe<ModuleTicketForModuleFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasFieldInput>;
};

export type ModuleTicketDeleteInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasDeleteFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleDeleteFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasDeleteFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasDeleteFieldInput>;
};

export type ModuleTicketDisconnectInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasDisconnectFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleDisconnectFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasDisconnectFieldInput>;
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

export type ModuleTicketModuleForModuleAggregationSelection = {
  __typename?: 'ModuleTicketModuleForModuleAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ModuleTicketModuleForModuleNodeAggregateSelection>;
};

export type ModuleTicketModuleForModuleNodeAggregateSelection = {
  __typename?: 'ModuleTicketModuleForModuleNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
};

export type ModuleTicketOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
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
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasCreateFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasCreateFieldInput>;
};

/** Fields to sort ModuleTickets by. The order in which sorts are applied is not guaranteed when specifying many fields in one ModuleTicketSort object. */
export type ModuleTicketSort = {
  id?: InputMaybe<SortDirection>;
};

export type ModuleTicketUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ModuleTicketUpdateInput = {
  clientHas?: InputMaybe<ModuleTicketClientHasUpdateFieldInput>;
  forModule?: InputMaybe<ModuleTicketForModuleUpdateFieldInput>;
  projectticketHas?: InputMaybe<ModuleTicketProjectticketHasUpdateFieldInput>;
  vendorHas?: InputMaybe<ModuleTicketVendorHasUpdateFieldInput>;
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
  labName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  registration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
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
  projectticketHas?: InputMaybe<ProjectTicketWhere>;
  projectticketHasAggregate?: InputMaybe<ModuleTicketProjectticketHasAggregateInput>;
  projectticketHasConnection?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
  projectticketHasConnection_NOT?: InputMaybe<ModuleTicketProjectticketHasConnectionWhere>;
  projectticketHas_NOT?: InputMaybe<ProjectTicketWhere>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  hasDocuments?: InputMaybe<ModuleHasDocumentsUpdateFieldInput>;
  moduleticketFor?: InputMaybe<ModuleModuleticketForUpdateFieldInput>;
  projectHas?: InputMaybe<ModuleProjectHasUpdateFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ModuleWhere = {
  AND?: InputMaybe<Array<ModuleWhere>>;
  NOT?: InputMaybe<ModuleWhere>;
  OR?: InputMaybe<Array<ModuleWhere>>;
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
  createCounters: CreateCountersMutationResponse;
  createDocuments: CreateDocumentsMutationResponse;
  createFiles: CreateFilesMutationResponse;
  createImages: CreateImagesMutationResponse;
  createInvoices: CreateInvoicesMutationResponse;
  createModuleTickets: CreateModuleTicketsMutationResponse;
  createModules: CreateModulesMutationResponse;
  createNotifications: CreateNotificationsMutationResponse;
  createPages: CreatePagesMutationResponse;
  createProjectTickets: CreateProjectTicketsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createServices: CreateServicesMutationResponse;
  createSupportTickets: CreateSupportTicketsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  createVendors: CreateVendorsMutationResponse;
  deleteAdmins: DeleteInfo;
  deleteClients: DeleteInfo;
  deleteCounters: DeleteInfo;
  deleteDocuments: DeleteInfo;
  deleteFiles: DeleteInfo;
  deleteImages: DeleteInfo;
  deleteInvoices: DeleteInfo;
  deleteModuleTickets: DeleteInfo;
  deleteModules: DeleteInfo;
  deleteNotifications: DeleteInfo;
  deletePages: DeleteInfo;
  deleteProjectTickets: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteServices: DeleteInfo;
  deleteSupportTickets: DeleteInfo;
  deleteUsers: DeleteInfo;
  deleteVendors: DeleteInfo;
  updateAdmins: UpdateAdminsMutationResponse;
  updateClients: UpdateClientsMutationResponse;
  updateCounters: UpdateCountersMutationResponse;
  updateDocuments: UpdateDocumentsMutationResponse;
  updateFiles: UpdateFilesMutationResponse;
  updateImages: UpdateImagesMutationResponse;
  updateInvoices: UpdateInvoicesMutationResponse;
  updateModuleTickets: UpdateModuleTicketsMutationResponse;
  updateModules: UpdateModulesMutationResponse;
  updateNotifications: UpdateNotificationsMutationResponse;
  updatePages: UpdatePagesMutationResponse;
  updateProjectTickets: UpdateProjectTicketsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
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


export type MutationCreateCountersArgs = {
  input: Array<CounterCreateInput>;
};


export type MutationCreateDocumentsArgs = {
  input: Array<DocumentsCreateInput>;
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


export type MutationDeleteCountersArgs = {
  where?: InputMaybe<CounterWhere>;
};


export type MutationDeleteDocumentsArgs = {
  delete?: InputMaybe<DocumentsDeleteInput>;
  where?: InputMaybe<DocumentsWhere>;
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


export type MutationUpdateFilesArgs = {
  connect?: InputMaybe<FilesConnectInput>;
  connectOrCreate?: InputMaybe<FilesConnectOrCreateInput>;
  create?: InputMaybe<FilesRelationInput>;
  delete?: InputMaybe<FilesDeleteInput>;
  disconnect?: InputMaybe<FilesDisconnectInput>;
  update?: InputMaybe<FilesUpdateInput>;
  where?: InputMaybe<FilesWhere>;
};


export type MutationUpdateImagesArgs = {
  connect?: InputMaybe<ImagesConnectInput>;
  connectOrCreate?: InputMaybe<ImagesConnectOrCreateInput>;
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


export type MutationUpdateServicesArgs = {
  connect?: InputMaybe<ServiceConnectInput>;
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
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type NotificationClientClientHasAggregationSelection = {
  __typename?: 'NotificationClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NotificationClientClientHasNodeAggregateSelection>;
};

export type NotificationClientClientHasNodeAggregateSelection = {
  __typename?: 'NotificationClientClientHasNodeAggregateSelection';
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type NotificationUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NotificationUpdateInput = {
  adminCreated?: InputMaybe<NotificationAdminCreatedUpdateFieldInput>;
  clientHas?: InputMaybe<NotificationClientHasUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  labName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  registration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
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
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  id: IdAggregateSelectionNonNullable;
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
  counters: Array<Counter>;
  countersAggregate: CounterAggregateSelection;
  countersConnection: CountersConnection;
  documents: Array<Documents>;
  documentsAggregate: DocumentsAggregateSelection;
  documentsConnection: DocumentsConnection;
  files: Array<Files>;
  filesAggregate: FilesAggregateSelection;
  filesConnection: FilesConnection;
  images: Array<Images>;
  imagesAggregate: ImagesAggregateSelection;
  imagesConnection: ImagesConnection;
  invoices: Array<Invoice>;
  invoicesAggregate: InvoiceAggregateSelection;
  invoicesConnection: InvoicesConnection;
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
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
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
  Approved = 'APPROVED',
  Assigned = 'ASSIGNED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

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
};

export type SupportTicketClientClientHasAggregationSelection = {
  __typename?: 'SupportTicketClientClientHasAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SupportTicketClientClientHasNodeAggregateSelection>;
};

export type SupportTicketClientClientHasNodeAggregateSelection = {
  __typename?: 'SupportTicketClientClientHasNodeAggregateSelection';
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
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
};

export type SupportTicketUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SupportTicketUpdateInput = {
  adminCreated?: InputMaybe<SupportTicketAdminCreatedUpdateFieldInput>;
  clientHas?: InputMaybe<SupportTicketClientHasUpdateFieldInput>;
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
  labName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  registration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
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
  connectivity?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
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
  status?: Maybe<Status>;
  user_type?: Maybe<UserType>;
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
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
};

export type UserClientIsClientAggregationSelection = {
  __typename?: 'UserClientIsClientAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserClientIsClientNodeAggregateSelection>;
};

export type UserClientIsClientNodeAggregateSelection = {
  __typename?: 'UserClientIsClientNodeAggregateSelection';
  companyEmail: StringAggregateSelectionNullable;
  companyImage: StringAggregateSelectionNullable;
  companyName: StringAggregateSelectionNullable;
  gst: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type UserConnectInput = {
  isAdmin?: InputMaybe<UserIsAdminConnectFieldInput>;
  isClient?: InputMaybe<UserIsClientConnectFieldInput>;
  isVendor?: InputMaybe<UserIsVendorConnectFieldInput>;
};

export type UserConnectOrCreateInput = {
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
  connectivity?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<UserIsAdminFieldInput>;
  isClient?: InputMaybe<UserIsClientFieldInput>;
  isVendor?: InputMaybe<UserIsVendorFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  user_type?: InputMaybe<UserType>;
};

export type UserDeleteInput = {
  isAdmin?: InputMaybe<UserIsAdminDeleteFieldInput>;
  isClient?: InputMaybe<UserIsClientDeleteFieldInput>;
  isVendor?: InputMaybe<UserIsVendorDeleteFieldInput>;
};

export type UserDisconnectInput = {
  isAdmin?: InputMaybe<UserIsAdminDisconnectFieldInput>;
  isClient?: InputMaybe<UserIsClientDisconnectFieldInput>;
  isVendor?: InputMaybe<UserIsVendorDisconnectFieldInput>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
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
  companyImage_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  companyImage_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  companyImage_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  companyImage_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  labName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  labName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  labName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  labName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  registration_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  registration_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  registration_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type UserOnCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  connectivity?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  user_type?: InputMaybe<UserType>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  isAdmin?: InputMaybe<UserIsAdminCreateFieldInput>;
  isClient?: InputMaybe<UserIsClientCreateFieldInput>;
  isVendor?: InputMaybe<UserIsVendorCreateFieldInput>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  address?: InputMaybe<SortDirection>;
  bio?: InputMaybe<SortDirection>;
  connectivity?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  user_type?: InputMaybe<SortDirection>;
};

export enum UserType {
  Admin = 'ADMIN',
  Consumer = 'CONSUMER',
  ServiceProvider = 'SERVICE_PROVIDER'
}

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  connectivity?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<UserIsAdminUpdateFieldInput>;
  isClient?: InputMaybe<UserIsClientUpdateFieldInput>;
  isVendor?: InputMaybe<UserIsVendorUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  user_type?: InputMaybe<UserType>;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
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
  connectivity?: InputMaybe<Scalars['Boolean']['input']>;
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
  status?: InputMaybe<Status>;
  status_IN?: InputMaybe<Array<InputMaybe<Status>>>;
  user_type?: InputMaybe<UserType>;
  user_type_IN?: InputMaybe<Array<InputMaybe<UserType>>>;
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
  createdInvoice?: Maybe<Invoice>;
  createdInvoiceAggregate?: Maybe<VendorInvoiceCreatedInvoiceAggregationSelection>;
  createdInvoiceConnection: VendorCreatedInvoiceConnection;
  hasModuleticket?: Maybe<ModuleTicket>;
  hasModuleticketAggregate?: Maybe<VendorModuleTicketHasModuleticketAggregationSelection>;
  hasModuleticketConnection: VendorHasModuleticketConnection;
  hasNotification?: Maybe<Notification>;
  hasNotificationAggregate?: Maybe<VendorNotificationHasNotificationAggregationSelection>;
  hasNotificationConnection: VendorHasNotificationConnection;
  hasSupportticket?: Maybe<SupportTicket>;
  hasSupportticketAggregate?: Maybe<VendorSupportTicketHasSupportticketAggregationSelection>;
  hasSupportticketConnection: VendorHasSupportticketConnection;
  id: Scalars['ID']['output'];
  labImage?: Maybe<Scalars['String']['output']>;
  labName?: Maybe<Scalars['String']['output']>;
  registration?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  labName: StringAggregateSelectionNullable;
  registration: StringAggregateSelectionNullable;
};

export type VendorConnectInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedConnectFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceConnectFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketConnectFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationConnectFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketConnectFieldInput>;
  userIs?: InputMaybe<VendorUserIsConnectFieldInput>;
};

export type VendorConnectOrCreateInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedConnectOrCreateFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketConnectOrCreateFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationConnectOrCreateFieldInput>;
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
  createdInvoice?: InputMaybe<VendorCreatedInvoiceFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketFieldInput>;
  labImage?: InputMaybe<Scalars['String']['input']>;
  labName?: InputMaybe<Scalars['String']['input']>;
  registration?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  create?: InputMaybe<VendorCreatedInvoiceCreateFieldInput>;
  delete?: InputMaybe<VendorCreatedInvoiceDeleteFieldInput>;
  disconnect?: InputMaybe<VendorCreatedInvoiceDisconnectFieldInput>;
  update?: InputMaybe<VendorCreatedInvoiceUpdateConnectionInput>;
  where?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
};

export type VendorDeleteInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedDeleteFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceDeleteFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketDeleteFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationDeleteFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketDeleteFieldInput>;
  userIs?: InputMaybe<VendorUserIsDeleteFieldInput>;
};

export type VendorDisconnectInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedDisconnectFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceDisconnectFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketDisconnectFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationDisconnectFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketDisconnectFieldInput>;
  userIs?: InputMaybe<VendorUserIsDisconnectFieldInput>;
};

export type VendorEdge = {
  __typename?: 'VendorEdge';
  cursor: Scalars['String']['output'];
  node: Vendor;
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
  id: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
  taxRate: IntAggregateSelectionNullable;
  taxType: StringAggregateSelectionNullable;
  totalPrice: IntAggregateSelectionNullable;
};

export type VendorModuleTicketHasModuleticketAggregationSelection = {
  __typename?: 'VendorModuleTicketHasModuleticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorModuleTicketHasModuleticketNodeAggregateSelection>;
};

export type VendorModuleTicketHasModuleticketNodeAggregateSelection = {
  __typename?: 'VendorModuleTicketHasModuleticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type VendorNotificationHasNotificationAggregationSelection = {
  __typename?: 'VendorNotificationHasNotificationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorNotificationHasNotificationNodeAggregateSelection>;
};

export type VendorNotificationHasNotificationNodeAggregateSelection = {
  __typename?: 'VendorNotificationHasNotificationNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type VendorOnCreateInput = {
  labImage?: InputMaybe<Scalars['String']['input']>;
  labName?: InputMaybe<Scalars['String']['input']>;
  registration?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VendorOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more VendorSort objects to sort Vendors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VendorSort>>;
};

export type VendorRelationInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedCreateFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceCreateFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketCreateFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationCreateFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketCreateFieldInput>;
  userIs?: InputMaybe<VendorUserIsCreateFieldInput>;
};

/** Fields to sort Vendors by. The order in which sorts are applied is not guaranteed when specifying many fields in one VendorSort object. */
export type VendorSort = {
  id?: InputMaybe<SortDirection>;
  labImage?: InputMaybe<SortDirection>;
  labName?: InputMaybe<SortDirection>;
  registration?: InputMaybe<SortDirection>;
};

export type VendorSupportTicketHasSupportticketAggregationSelection = {
  __typename?: 'VendorSupportTicketHasSupportticketAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VendorSupportTicketHasSupportticketNodeAggregateSelection>;
};

export type VendorSupportTicketHasSupportticketNodeAggregateSelection = {
  __typename?: 'VendorSupportTicketHasSupportticketNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type VendorUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorUpdateInput = {
  adminApproved?: InputMaybe<VendorAdminApprovedUpdateFieldInput>;
  createdInvoice?: InputMaybe<VendorCreatedInvoiceUpdateFieldInput>;
  hasModuleticket?: InputMaybe<VendorHasModuleticketUpdateFieldInput>;
  hasNotification?: InputMaybe<VendorHasNotificationUpdateFieldInput>;
  hasSupportticket?: InputMaybe<VendorHasSupportticketUpdateFieldInput>;
  labImage?: InputMaybe<Scalars['String']['input']>;
  labName?: InputMaybe<Scalars['String']['input']>;
  registration?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_POP?: InputMaybe<Scalars['Int']['input']>;
  skills_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  image: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
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
  createdInvoice?: InputMaybe<InvoiceWhere>;
  createdInvoiceAggregate?: InputMaybe<VendorCreatedInvoiceAggregateInput>;
  createdInvoiceConnection?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
  createdInvoiceConnection_NOT?: InputMaybe<VendorCreatedInvoiceConnectionWhere>;
  createdInvoice_NOT?: InputMaybe<InvoiceWhere>;
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
  labImage?: InputMaybe<Scalars['String']['input']>;
  labImage_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  labImage_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  labImage_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labImage_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  labName?: InputMaybe<Scalars['String']['input']>;
  labName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  labName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  labName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  registration?: InputMaybe<Scalars['String']['input']>;
  registration_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  registration_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  registration_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  registration_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_INCLUDES?: InputMaybe<Scalars['String']['input']>;
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
