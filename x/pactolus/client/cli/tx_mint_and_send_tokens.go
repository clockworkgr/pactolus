package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdMintAndSendTokens() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-and-send-tokens [denom] [amount] [recipient]",
		Short: "Broadcast message MintAndSendTokens",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argDenom := args[0]
			argAmount := args[1]
			argRecipient := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			amount, err := strconv.Atoi(argAmount)
			msg := types.NewMsgMintAndSendTokens(
				clientCtx.GetFromAddress().String(),
				argDenom,
				uint64(amount),
				argRecipient,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
