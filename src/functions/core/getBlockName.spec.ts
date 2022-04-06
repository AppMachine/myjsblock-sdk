
// import '../../../test/setup/stubs'
import callRemoteFunction from '../../messenging/callRemoteFunction';
import getBlockName from './getBlockName';
import Mock = jest.Mock

jest.mock('../../messenging/callRemoteFunction', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('getBlockName', () => {
  beforeEach(() => {
    (callRemoteFunction as Mock).mockResolvedValue(undefined);
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call callRemoteFunction with the correct function name and arguments', async () => {
    await getBlockName()

    expect(callRemoteFunction).toHaveBeenCalledWith('getProperty', { "name": "caption" })
  });
});