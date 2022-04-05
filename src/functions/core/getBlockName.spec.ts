
// import '../../../test/setup/stubs'
import callRemoteFunction from '../../messenging/callRemoteFunction';
import getBlockName from './getBlockName';
import Mock = jest.Mock

const callRemoteFunctionMock = () => jest.fn()


jest.mock('../../messenging/callRemoteFunction', () => ({
  __esModule: true,
  default: console.log
}))

describe('getBlockName', () => {
  beforeEach(() => {
    (callRemoteFunction as Mock).mockResolvedValue(undefined);
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call callRemoteFunction with the correct function name', async () => {
    await getBlockName()

    expect(callRemoteFunctionMock).toHaveBeenCalledTimes(1)
  });
});